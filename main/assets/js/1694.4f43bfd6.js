(window.webpackJsonp=window.webpackJsonp||[]).push([[1694],{2997:function(a,t,s){"use strict";s.r(t);var e=s(19),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"uavcan-펌웨어-업그레이드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-펌웨어-업그레이드"}},[a._v("#")]),a._v(" UAVCAN 펌웨어 업그레이드")]),a._v(" "),s("p",[a._v("PX4 will automatically upgrade firmware on UAVCAN nodes if the appropriate firmware is supplied. The firmware build process is manufacturer dependent (instructions for different firmware linked below).")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("UAVCAN 장치는 일반적으로 적절한 펌웨어가 사전 설치된 상태로 판매됩니다.\n이러한 지침은 UAVCAN 장치를 개발할 때 주로 필요합니다.")])]),a._v(" "),s("h2",{attrs:{id:"vectorcontrol-esc-코드-베이스-pixhawk-esc-1-6과-s2740vc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vectorcontrol-esc-코드-베이스-pixhawk-esc-1-6과-s2740vc"}},[a._v("#")]),a._v(" Vectorcontrol ESC 코드 베이스 (Pixhawk ESC  1.6과 S2740VC)")]),a._v(" "),s("p",[a._v("ESC 코드를 다운로드합니다:")]),a._v(" "),s("p",[a._v("UAVCAN로 펌웨어를 업데이트하기 전에, Pixhawk ESC 1.6은 UAVCAN 부트로더를 플래시하여야 합니다. 부트로더를 빌드하가 위하여, 다음 명령어를 실행하십시오.")]),a._v(" "),s("p",[a._v("빌드 후 부트로더 이미지는 "),s("code",[a._v("firmware/px4esc_1_6-bootloader.bin")]),a._v("에 있으며 OpenOCD 구성은 "),s("code",[a._v("openocd_px4esc_1_6.cfg")]),a._v("에 있습니다. "),s("RouterLink",{attrs:{to:"/ko/uavcan/bootloader_installation.html"}},[a._v("이 지침")]),a._v("에 따라 ESC에 부트로더를 설치합니다.\n:::")],1),a._v(" "),s("h2",{attrs:{id:"sapog-코드-베이스-pixhawk-esc-1-4와-zubax-orel-20"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sapog-코드-베이스-pixhawk-esc-1-4와-zubax-orel-20"}},[a._v("#")]),a._v(" Sapog 코드 베이스 (Pixhawk ESC 1.4와 Zubax Orel 20)")]),a._v(" "),s("h3",{attrs:{id:"uavcan-부트로더-플래싱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-부트로더-플래싱"}},[a._v("#")]),a._v(" UAVCAN 부트로더 플래싱")]),a._v(" "),s("p",[a._v("Please refer to the "),s("RouterLink",{attrs:{to:"/ko/uavcan/ark_flow.html"}},[a._v("Ark Flow documentation")]),a._v(" under "),s("strong",[a._v("Building Ark Flow Firmware")]),a._v(" to learn how to build and flash this firmware.")],1),a._v(" "),s("h3",{attrs:{id:"메인-바이너리-컴파일"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#메인-바이너리-컴파일"}},[a._v("#")]),a._v(" 메인 바이너리 컴파일")]),a._v(" "),s("p",[a._v("Sapog 코드 베이스를 다운로드하십시오:")]),a._v(" "),s("h3",{attrs:{id:"uavcan-부트로더-플래싱-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-부트로더-플래싱-2"}},[a._v("#")]),a._v(" UAVCAN 부트로더 플래싱")]),a._v(" "),s("p",[a._v("Please refer to the "),s("a",{attrs:{href:"https://github.com/Zubax/zubax_gnss",target:"_blank",rel:"noopener noreferrer"}},[a._v("project page"),s("OutboundLink")],1),a._v(" to learn how to build and flash this firmware.")]),a._v(" "),s("h3",{attrs:{id:"메인-바이너리-컴파일-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#메인-바이너리-컴파일-2"}},[a._v("#")]),a._v(" 메인 바이너리 컴파일")]),a._v(" "),s("p",[a._v("Download the ESC code:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/thiemar/vectorcontrol\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" vectorcontrol\n")])])]),s("h4",{attrs:{id:"flashing-the-uavcan-bootloader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flashing-the-uavcan-bootloader"}},[a._v("#")]),a._v(" Flashing the UAVCAN Bootloader")]),a._v(" "),s("p",[a._v("GCC의 일부 최신 버전은 연결하는 동안 segfaults로 이어집니다. 이 문서 작성시에는 버전 4.9는 작동하였습니다.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOARD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("px4esc_1_6 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -j8\n")])])]),s("p",[a._v("펌웨어 빌드 및 플래시 방법은 "),s("a",{attrs:{href:"https://github.com/Zubax/zubax_gnss",target:"_blank",rel:"noopener noreferrer"}},[a._v("프로젝트 페이지"),s("OutboundLink")],1),a._v("를 참조하세요. Zubax GNSS는 UAVCAN 지원 부트로더와 함께 제공되므로, 펌웨어는 아래 설명된 대로 UAVCAN을 통해 균일한 방식으로 업데이트할 수 있습니다.")]),a._v(" "),s("h4",{attrs:{id:"compiling-the-main-binary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compiling-the-main-binary"}},[a._v("#")]),a._v(" Compiling the Main Binary")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOARD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("s2740vc_1_0 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOARD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("px4esc_1_6 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n")])])]),s("p",[a._v("UAVCAN 노드 파일 이름은 제조업체에 관계없이 Pixhawk가 네트워크의 모든 UAVCAN 장치를 업데이트를 위한 명명 규칙을 따릅니다. 따라서 위 단계에서 생성된 펌웨어 파일은 장치를 업데이트하려면 SD 카드 또는 PX4 ROMFS의 올바른 위치에 복사해야 합니다.")])])}),[],!1,null,null,null);t.default=r.exports}}]);