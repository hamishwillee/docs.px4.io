(window.webpackJsonp=window.webpackJsonp||[]).push([[1458],{2658:function(a,s,t){"use strict";t.r(s);var e=t(19),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"uavcan-펌웨어-업그레이드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-펌웨어-업그레이드"}},[a._v("#")]),a._v(" UAVCAN 펌웨어 업그레이드")]),a._v(" "),t("p",[a._v("PX4는 UAVCAN 노드의 일치하는 펌웨어가 있으면, 펌웨어를 자동으로 업그레이드합니다.")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("UAVCAN")]),a._v(" "),t("p",[a._v("장치는 일반적으로 적절한 펌웨어가 사전 설치된 상태로 판매됩니다. 이러한 지침은 UAVCAN 장치를 개발할 때 주로 필요합니다.")])]),a._v(" "),t("h2",{attrs:{id:"vectorcontrol-esc-코드-베이스-pixhawk-esc-1-6과-s2740vc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vectorcontrol-esc-코드-베이스-pixhawk-esc-1-6과-s2740vc"}},[a._v("#")]),a._v(" Vectorcontrol ESC 코드 베이스 (Pixhawk ESC  1.6과 S2740VC)")]),a._v(" "),t("p",[a._v("ESC 코드를 다운로드합니다:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/thiemar/vectorcontrol\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" vectorcontrol\n")])])]),t("h3",{attrs:{id:"uavcan-부트로더-플래싱"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-부트로더-플래싱"}},[a._v("#")]),a._v(" UAVCAN 부트로더 플래싱")]),a._v(" "),t("p",[a._v("UAVCAN로 펌웨어를 업데이트하기 전에, Pixhawk ESC 1.6은 UAVCAN 부트로더를 플래시하여야 합니다. 부트로더를 빌드하가 위하여, 다음 명령어를 실행하십시오.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOARD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("px4esc_1_6 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -j8\n")])])]),t("p",[a._v("빌드 후 부트로더 이미지는 "),t("code",[a._v("firmware/px4esc_1_6-bootloader.bin")]),a._v("에 있으며 OpenOCD 구성은 "),t("code",[a._v("openocd_px4esc_1_6.cfg")]),a._v("에 있습니다. "),t("RouterLink",{attrs:{to:"/ko/uavcan/bootloader_installation.html"}},[a._v("이 지침")]),a._v("에 따라 ESC에 부트로더를 설치합니다.")],1),a._v(" "),t("h3",{attrs:{id:"메인-바이너리-컴파일"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#메인-바이너리-컴파일"}},[a._v("#")]),a._v(" 메인 바이너리 컴파일")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOARD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("s2740vc_1_0 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOARD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("px4esc_1_6 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n")])])]),t("p",[a._v("이렇게 하면 지원되는 두 ESC 모두에 대해 UAVCAN 노드 펌웨어가 빌드됩니다. 펌웨어 이미지는 "),t("code",[a._v("com.thiemar.s2740vc-v1-1.0-1.0.<git hash>.bin")]),a._v(" 및 "),t("code",[a._v("org.pixhawk.px4esc-v1-1.6-1.0.<git hash>.binn")]),a._v("에 있습니다.")]),a._v(" "),t("h2",{attrs:{id:"sapog-코드-베이스-pixhawk-esc-1-4와-zubax-orel-20"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sapog-코드-베이스-pixhawk-esc-1-4와-zubax-orel-20"}},[a._v("#")]),a._v(" Sapog 코드 베이스 (Pixhawk ESC 1.4와 Zubax Orel 20)")]),a._v(" "),t("p",[a._v("Sapog 코드 베이스를 다운로드하십시오:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/PX4/sapog\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" sapog\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" submodule update --init --recursive\n")])])]),t("h3",{attrs:{id:"uavcan-부트로더-플래싱-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-부트로더-플래싱-2"}},[a._v("#")]),a._v(" UAVCAN 부트로더 플래싱")]),a._v(" "),t("p",[a._v("UAVCAN로 펌웨어를 업데이트하기 전에, ESC는 UAVCAN 부트로더를 플래시하여야 합니다. 부트로더는 다음과 같이 빌드할 수 있습니다.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" bootloader\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -j8\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n")])])]),t("p",[a._v("부트로더 이미지는 "),t("code",[a._v("bootloader/firmware/bootloader.bin")]),a._v("에 있으며 OpenOCD 구성은 "),t("code",[a._v("openocd.cfg")]),a._v("에 있습니다. "),t("RouterLink",{attrs:{to:"/ko/uavcan/bootloader_installation.html"}},[a._v("이 지침")]),a._v("에 따라 ESC에 부트로더를 설치합니다.")],1),a._v(" "),t("h3",{attrs:{id:"메인-바이너리-컴파일-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#메인-바이너리-컴파일-2"}},[a._v("#")]),a._v(" 메인 바이너리 컴파일")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" firmware\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RELEASE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# RELEASE is optional; omit to build the debug version")]),a._v("\n")])])]),t("p",[a._v("GCC의 일부 최신 버전은 연결하는 동안 segfaults로 이어집니다. 이 문서 작성시에는 버전 4.9는 작동하였습니다. 펌웨어 이미지는 "),t("code",[a._v("firmware/build/io.px4.sapog-1.1-1.7.<xxxxxxxx>.application.bin")]),a._v("에 위치합니다. 여기서 "),t("code",[a._v("<xxxxxxxx>")]),a._v("는 임의의 숫자와 문자 시퀀스입니다. Zubax Orel 20의 두 가지 하드웨어 버전(1.0 및 1.1)이 있습니다. 다음 설명에서 바이너리를 올바른 폴더에 복사하였는지 확인하십시오. ESC 펌웨어는 하드웨어 버전을 확인하고 두 제품 모두에서 작동합니다.")]),a._v(" "),t("h2",{attrs:{id:"zubax-gnss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zubax-gnss"}},[a._v("#")]),a._v(" Zubax GNSS")]),a._v(" "),t("p",[a._v("펌웨어 빌드 및 플래시 방법은 "),t("a",{attrs:{href:"https://github.com/Zubax/zubax_gnss",target:"_blank",rel:"noopener noreferrer"}},[a._v("프로젝트 페이지"),t("OutboundLink")],1),a._v("를 참조하세요. Zubax GNSS는 UAVCAN 지원 부트로더와 함께 제공되므로, 펌웨어는 아래 설명된 대로 UAVCAN을 통해 균일한 방식으로 업데이트할 수 있습니다.")]),a._v(" "),t("h2",{attrs:{id:"자동조종장치-펌웨어-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#자동조종장치-펌웨어-설치"}},[a._v("#")]),a._v(" 자동조종장치 펌웨어 설치")]),a._v(" "),t("p",[a._v("UAVCAN 노드 파일 이름은 제조업체에 관계없이 Pixhawk가 네트워크의 모든 UAVCAN 장치를 업데이트를 위한 명명 규칙을 따릅니다. 따라서 위 단계에서 생성된 펌웨어 파일은 장치를 업데이트하려면 SD 카드 또는 PX4 ROMFS의 올바른 위치에 복사해야 합니다.")]),a._v(" "),t("p",[a._v("펌웨어 이미지 명명 규칙은 다음과 같습니다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<uavcan name>-<hw version major>.<hw version minor>-<sw version major>.<sw version minor>.<version hash>.bin\n")])])]),t("p",[a._v("예: "),t("code",[a._v("com.thiemar.s2740vc-v1-1.0-1.0.68e34de6.bin")])]),a._v(" "),t("p",[a._v("그러나, 공간/성능 제약으로 인하여(이름은 28자를 초과할 수 없음) UAVCAN 펌웨어 업데이터는 이러한 파일 이름을 분할하여 다음과 같은 디렉토리 구조에 저장합니다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("/fs/microsd/fw/<node name>/<hw version major>.<hw version minor>/<hw name>-<sw version major>.<sw version minor>.<git hash>.bin\n")])])]),t("p",[a._v("예:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("s2740vc-v1-1.0.68e34de6.bin \n/fs/microsd/fw/io.px4.sapog/1.1/sapog-1.7.87c7bc0.bin\n")])])]),t("p",[a._v("ROMFS 기반 업데이터는 해당 패턴을 따르지만 파일 이름 앞에 "),t("code",[a._v("_")]),a._v("을 추가하므로 다음 위치에 펌웨어를 추가합니다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("/etc/uavcan/fw/<device name>/<hw version major>.<hw version minor>/_<hw name>-<sw version major>.<sw version minor>.<git hash>.bin\n")])])]),t("h2",{attrs:{id:"px4-romfs-바이너리-복사"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#px4-romfs-바이너리-복사"}},[a._v("#")]),a._v(" PX4 ROMFS 바이너리 복사")]),a._v(" "),t("p",[a._v("최종 파일 위치는 다음과 같습니다.")]),a._v(" "),t("ul",[t("li",[a._v("S2740VC 전동 변속기: "),t("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/com.thiemar.s2740vc-v1/1.0/_s2740vc-v1-1.0.<git hash>.bin")])]),a._v(" "),t("li",[a._v("Pixhawk 전동 변속기 1.6: "),t("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/org.pixhawk.px4esc-v1/1.6/_px4esc-v1-1.6.<git hash>.bin")])]),a._v(" "),t("li",[a._v("Pixhawk 전동 변속기 1.4: "),t("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/org.pixhawk.sapog-v1/1.4/_px4esc-v1-1.4.<git hash>.bin")])]),a._v(" "),t("li",[a._v("Zubax GNSS v1: "),t("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/com.zubax.gnss/1.0/gnss-1.0.<git has>.bin")])]),a._v(" "),t("li",[a._v("Zubax GNSS v2: "),t("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/com.zubax.gnss/2.0/gnss-2.0.<git has>.bin")])])]),a._v(" "),t("p",[a._v("ROMFS/px4fmu_common 디렉토리는 Pixhawk의 /etc에 마운트됩니다.")]),a._v(" "),t("h3",{attrs:{id:"펌웨어-업그레이드-프로세스-시작"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#펌웨어-업그레이드-프로세스-시작"}},[a._v("#")]),a._v(" 펌웨어 업그레이드 프로세스 시작")]),a._v(" "),t("p",[a._v("PX4 Flight Stack을 사용하는 경우에는, 'Power Config' 섹션에서 UAVCAN을 활성화하고 UAVCAN 펌웨어 업그레이드를 시도하기 전에 시스템을 재부팅하십시오.")]),a._v(" "),t("p",[a._v("또는 다음을 통해 NSH에서 UAVCAN 펌웨어 업그레이드를 수동으로 시작할 수 있습니다.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("uavcan start\nuavcan start fw\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);