(window.webpackJsonp=window.webpackJsonp||[]).push([[1888],{3390:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"stm32-부트로더"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stm32-부트로더"}},[t._v("#")]),t._v(" STM32 부트로더")]),t._v(" "),s("p",[t._v("PX4 부트로더용 코드는 Github "),s("a",{attrs:{href:"https://github.com/px4/bootloader",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootloader"),s("OutboundLink")],1),t._v(" 저장소에서 제공합니다.")]),t._v(" "),s("h2",{attrs:{id:"지원-보드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#지원-보드"}},[t._v("#")]),t._v(" 지원 보드")]),t._v(" "),s("ul",[s("li",[t._v("FMUv2 (픽스호크 1, STM32F4)")]),t._v(" "),s("li",[t._v("FMUv3 (픽스호크 2, STM32F4)")]),t._v(" "),s("li",[t._v("FMUv4 (픽스레이서 3와 픽스호크 3 프로, STM32F4)")]),t._v(" "),s("li",[t._v("FMUv5 (픽스호크 4, STM32F7)")]),t._v(" "),s("li",[t._v("TAPv1 (TBA, STM32F4)")]),t._v(" "),s("li",[t._v("ASCv1 (TBA, STM32F4)")])]),t._v(" "),s("h2",{attrs:{id:"부트로더-빌드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#부트로더-빌드"}},[t._v("#")]),t._v(" 부트로더 빌드")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/Bootloader.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Bootloader\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule init\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),s("p",[t._v("위 과정을 거치면 Bootloader 디렉터리에서 지원하는 보드의 elf 파일을 생성합니다.")]),t._v(" "),s("h2",{attrs:{id:"부트로더-플래싱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#부트로더-플래싱"}},[t._v("#")]),t._v(" 부트로더 플래싱")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("일부 보드에서는 올바른 전원 시퀀스는 JTAG/SWD 액세스 과정에서 필수적입니다. 설명된 대로 정확히 다음 단계를 따르십시오. 부트로더를 플래싱하는 개발자는 필요한 지식을 숙지해야 합니다.")]),t._v(" "),s("p",[t._v("아래 지침은 Blackmagic/Dronecode 프로브에 유효합니다. 다른 JTAG 프로브에는 유사한 단계가 필요합니다. 부트로더를 플래싱하는 개발자는 필요한 지식을 숙지하여야 합니다. 이 작업을 수행하는 방법을 모르는 경우에는 부트로더에 변경해야 할 사항이 있는지를 다 시 살펴보십시오.")]),t._v(" "),s("p",[t._v("순서는 다음과 같습니다.")]),t._v(" "),s("ol",[s("li",[t._v("JTAG 케이블 연결 제거")]),t._v(" "),s("li",[t._v("USB 전원 케이블 연결")]),t._v(" "),s("li",[t._v("JTAG 케이블 연결")])]),t._v(" "),s("h3",{attrs:{id:"블랙-매직-드론코드-프로브"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#블랙-매직-드론코드-프로브"}},[t._v("#")]),t._v(" 블랙 매직 / 드론코드 프로브")]),t._v(" "),s("h4",{attrs:{id:"올바른-직렬-포트-사용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#올바른-직렬-포트-사용"}},[t._v("#")]),t._v(" 올바른 직렬 포트 사용")]),t._v(" "),s("ul",[s("li",[t._v("리눅스: "),s("code",[t._v("/dev/serial/by-id/usb-Black_Sphere_XXX-if00")])]),t._v(" "),s("li",[t._v("MAC OS: tty.xxx 포트가 아닌 cu.xxx 포트를 사용합니다. "),s("code",[t._v("tar ext /dev/tty.usbmodemDDEasdf")])])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("arm-none-eabi-gdb\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" ext /dev/serial/by-id/usb-Black_Sphere_XXX-if00\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" mon swdp_scan\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" attach "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" mon option erase\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" mon erase_mass\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" load tapv1_bl.elf\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n        Transfer rate: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" KB/sec, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("828")]),t._v(" bytes/write.\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v("\n")])])]),s("h3",{attrs:{id:"j-link"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#j-link"}},[t._v("#")]),t._v(" J-Link")]),t._v(" "),s("p",[t._v("이 지침은 "),s("a",{attrs:{href:"https://www.segger.com/jlink-gdb-server.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("J-Link GDB 서버"),s("OutboundLink")],1),t._v("에 관한 것입니다.")]),t._v(" "),s("h4",{attrs:{id:"준비-사항"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#준비-사항"}},[t._v("#")]),t._v(" 준비 사항")]),t._v(" "),s("p",[t._v("Segger 웹사이트에서 "),s("a",{attrs:{href:"https://www.segger.com/downloads/jlink",target:"_blank",rel:"noopener noreferrer"}},[t._v("J-Link 소프트웨어를 다운로드"),s("OutboundLink")],1),t._v("하고, 지침에 따라 설치합니다.")]),t._v(" "),s("h4",{attrs:{id:"jlink-gdb-서버-실행"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jlink-gdb-서버-실행"}},[t._v("#")]),t._v(" JLink GDB 서버 실행")]),t._v(" "),s("p",[t._v("아래 명령어는 STM32F427VI SoC를 사용하는 비행 콘트롤러용 서버를 실행합니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("JLinkGDBServer -select "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("USB")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -device STM32F427VI -if SWD-DP -speed "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),t._v("\n")])])]),s("p",[t._v("공통 대상에 대한 "),s("code",[t._v("--device")]),t._v("/SoC는 다음과 같습니다.")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("FMUv2, FMUv3, FMUv4, aerofc-v1, mindpx-v2:")]),t._v(" STM32F427VI")]),t._v(" "),s("li",[s("strong",[t._v("px4_fmu-v4pro:")]),t._v(" STM32F469II")]),t._v(" "),s("li",[s("strong",[t._v("px4_fmu-v5:")]),t._v(" STM32F765II")]),t._v(" "),s("li",[s("strong",[t._v("crazyflie:")]),t._v(" STM32F405RG")])]),t._v(" "),s("h4",{attrs:{id:"gdb-연결"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gdb-연결"}},[t._v("#")]),t._v(" GDB 연결")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("arm-none-eabi-gdb\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" ext :2331\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" load aerofcv1_bl.elf\n")])])]),s("h3",{attrs:{id:"문제-해결"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[t._v("#")]),t._v(" 문제 해결")]),t._v(" "),s("p",[t._v("위의 명령 중 하나라도 찾을 수 없다면, Blackmagic 프로브를 사용하지 않거나 소프트웨어가 오래된 것입니다. 온 프로브 소프트웨어를 먼저 업그레이드하십시오.")]),t._v(" "),s("p",[t._v("이 오류 메시지가 발생하는 경우:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Error erasing flash with vFlashErase packet\n")])])]),s("p",[t._v("대상을 분리하고(JTAG가 연결된 상태에서), 다음 명령어를 실행합니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("mon tpwr disable\nswdp_scan\nattach "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nload tapv1_bl.elf\n")])])]),s("p",[t._v("이렇게 하면 대상 전원이 비활성화되고, 플래시를 재시도 할 수 있습니다.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);