(window.webpackJsonp=window.webpackJsonp||[]).push([[1114],{2300:function(a,s,e){"use strict";e.r(s);var t=e(19),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"uavcan-펌웨어-업그레이드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-펌웨어-업그레이드"}},[a._v("#")]),a._v(" UAVCAN 펌웨어 업그레이드")]),a._v(" "),e("p",[a._v("전동 변속기 코드를 다운로드하십시오:")]),a._v(" "),e("p",[a._v("UAVCAN으로 펌웨어 업그레이드를 진행하기 전, 픽스호크 전동 변속기 1.6에 UAVCAN 부트로더를 플래싱해야합니다. 부트로더를 빌드하려면 다음 명령을 실행하십시오:\n:::")]),a._v(" "),e("h2",{attrs:{id:"vectorcontrol-전동-변속기-코드-베이스-픽스호크-전동-변속기-1-6과-s2740vc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vectorcontrol-전동-변속기-코드-베이스-픽스호크-전동-변속기-1-6과-s2740vc"}},[a._v("#")]),a._v(" Vectorcontrol 전동 변속기 코드 베이스 (픽스호크 전동 변속기 1.6과 S2740VC)")]),a._v(" "),e("p",[a._v("Download the ESC code:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/thiemar/vectorcontrol\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" vectorcontrol\n")])])]),e("h3",{attrs:{id:"uavcan-부트로더-플래싱"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-부트로더-플래싱"}},[a._v("#")]),a._v(" UAVCAN 부트로더 플래싱")]),a._v(" "),e("p",[a._v("이 명령은 지원하는 전동 변속기용 UAVCAN 노드 펌웨어를 빌드합니다. 펌웨어 이미지는 "),e("code",[a._v("com.thiemar.s2740vc-v1-1.0-1.0.<git hash>.bin")]),a._v("과 "),e("code",[a._v("org.pixhawk.px4esc-v1-1.6-1.0.<git hash>.bin")]),a._v("으로 들어갑니다.")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOARD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("px4esc_1_6 "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -j8\n")])])]),e("p",[a._v("After building, the bootloader image is located at "),e("code",[a._v("firmware/px4esc_1_6-bootloader.bin")]),a._v(", and the OpenOCD configuration is located at "),e("code",[a._v("openocd_px4esc_1_6.cfg")]),a._v(". Follow "),e("RouterLink",{attrs:{to:"/ko/uavcan/bootloader_installation.html"}},[a._v("these instructions")]),a._v(" to install the bootloader on the ESC.")],1),a._v(" "),e("h3",{attrs:{id:"주요-바이너리-컴파일"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#주요-바이너리-컴파일"}},[a._v("#")]),a._v(" 주요 바이너리 컴파일")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOARD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("s2740vc_1_0 "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOARD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("px4esc_1_6 "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n")])])]),e("p",[a._v("UAVCAN으로 펌웨어를 업데이트하기 전, 전동 변속기에 UAVCAN 부트로더를 플래싱해야합니다. 다음 명령어로 부트로더를 빌드할 수 있습니다:")]),a._v(" "),e("h2",{attrs:{id:"sapog-코드-베이스-픽스호크-전동-변속기-1-4와-zubax-orel-20"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sapog-코드-베이스-픽스호크-전동-변속기-1-4와-zubax-orel-20"}},[a._v("#")]),a._v(" Sapog 코드 베이스 (픽스호크 전동 변속기 1.4와 Zubax Orel 20)")]),a._v(" "),e("p",[a._v("Download the Sapog codebase:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/PX4/sapog\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" sapog\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" submodule update --init --recursive\n")])])]),e("h3",{attrs:{id:"uavcan-부트로더-플래싱-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-부트로더-플래싱-2"}},[a._v("#")]),a._v(" UAVCAN 부트로더 플래싱")]),a._v(" "),e("p",[a._v("일부 GCC 신 버전에서 심볼 링크를 진행할 때  segmentation fault 오류가 나타날 수 있음을 염두에 두십시오. 이 글을 작성할 때 버전 4.9는 동작합니다.")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" bootloader\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -j8\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n")])])]),e("p",[a._v("펌웨어 빌드 및 플래싱 방법은 "),e("a",{attrs:{href:"https://github.com/Zubax/zubax_gnss",target:"_blank",rel:"noopener noreferrer"}},[a._v("프로젝트 페이지"),e("OutboundLink")],1),a._v("를 참고하십시오. Zubax GNSS는 UAVCAN 기능을 활용할 수 있는 부트로더가 딸려오기 때문에, 아래에서 설명하는대로 UAVCAN을 활용하는 단순 방식으로 펌웨어를 업데이트할 수 있습니다.")]),a._v(" "),e("h3",{attrs:{id:"주요-바이너리-컴파일-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#주요-바이너리-컴파일-2"}},[a._v("#")]),a._v(" 주요 바이너리 컴파일")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" firmware\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RELEASE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# RELEASE is optional; omit to build the debug version")]),a._v("\n")])])]),e("p",[a._v("UAVCAN 노드 파일 이름은 픽스호크에서 제조사에 관계없이 어떤 이름으로 네트워크의 모든 UAVCAN 장치를 업데이트하는지 결정하는 작명 규칙을 따릅니다. 이 단계에서 만든 펌웨어 파일은 장치를 업데이트하기 위해 SD카드나 PX4 ROMFS 의 올바른 위치에 복사해야합니다. The firmware image will be located at "),e("code",[a._v("firmware/build/io.px4.sapog-1.1-1.7.<xxxxxxxx>.application.bin")]),a._v(", where "),e("code",[a._v("<xxxxxxxx>")]),a._v(" is an arbitrary sequence of numbers and letters. There are two hardware version of the Zubax Orel 20 (1.0 and 1.1). Make sure you copy the binary to the correct folder in the subsequent description. The ESC firmware will check the hardware version and works on both products.1")]),a._v(" "),e("h2",{attrs:{id:"zubax-gnss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zubax-gnss"}},[a._v("#")]),a._v(" Zubax GNSS")]),a._v(" "),e("p",[a._v("Please refer to the "),e("a",{attrs:{href:"https://github.com/Zubax/zubax_gnss",target:"_blank",rel:"noopener noreferrer"}},[a._v("project page"),e("OutboundLink")],1),a._v(" to learn how to build and flash the firmware. Zubax GNSS comes with a UAVCAN-capable bootloader, so its firmware can be updated in a uniform fashion via UAVCAN as described below.")]),a._v(" "),e("h2",{attrs:{id:"자동-항법-장치에-펌웨어-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#자동-항법-장치에-펌웨어-설치"}},[a._v("#")]),a._v(" 자동 항법 장치에 펌웨어 설치")]),a._v(" "),e("p",[a._v("The UAVCAN node file names follow a naming convention which allows the Pixhawk to update all UAVCAN devices on the network, regardless of manufacturer. The firmware files generated in the steps above must therefore be copied to the correct locations on an SD card or the PX4 ROMFS in order for the devices to be updated.")]),a._v(" "),e("p",[a._v("그러나 용량과 성능의 제약 문제로 인해(이름 글자수는 28글자를 넘으면 안됨), UAVCAN 펌웨어 업데이터는 파일 이름을 다음과 같은 구조의 디렉터리에 쪼개어 저장합니다:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("<uavcan name>-<hw version major>.<hw version minor>-<sw version major>.<sw version minor>.<version hash>.bin\n")])])]),e("p",[a._v("예:")]),a._v(" "),e("p",[a._v("ROMFS 기반 업데이터는 다음과 같은 규칙을 따르나, 파일 이름 앞에 ``_ 문자가 붙어 펌웨어파일이 다음 위치에 들어갑니다:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/fs/microsd/fw/<node name>/<hw version major>.<hw version minor>/<hw name>-<sw version major>.<sw version minor>.<git hash>.bin\n")])])]),e("p",[a._v("최종 파일 위치는 다음과 같습니다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("s2740vc-v1-1.0.68e34de6.bin \n/fs/microsd/fw/io.px4.sapog/1.1/sapog-1.7.87c7bc0.bin\n")])])]),e("p",[a._v("ROMFS/px4fmu_common 디렉터리는 픽스호크의 /etc 로 마운트합니다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/etc/uavcan/fw/<device name>/<hw version major>.<hw version minor>/_<hw name>-<sw version major>.<sw version minor>.<git hash>.bin\n")])])]),e("h2",{attrs:{id:"px4-romfs에-바이너리-복사"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4-romfs에-바이너리-복사"}},[a._v("#")]),a._v(" PX4 ROMFS에 바이너리 복사")]),a._v(" "),e("p",[a._v("PX4 플라이트 스택을 활용할 경우, '전원 설정' 절의 UAVCAN 기능을 켜고, UAVCAN 펌웨어 업그레이드를 시도하기 전에 시스템을 다시 부팅하십시오.")]),a._v(" "),e("ul",[e("li",[a._v("S2740VC 전동 변속기: "),e("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/com.thiemar.s2740vc-v1/1.0/_s2740vc-v1-1.0.<git hash>.bin")])]),a._v(" "),e("li",[a._v("픽스호크 전동 변속기 1.6: "),e("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/org.pixhawk.px4esc-v1/1.6/_px4esc-v1-1.6.<git hash>.bin")])]),a._v(" "),e("li",[a._v("Pixhawk 전동 변속기 1.4: "),e("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/org.pixhawk.sapog-v1/1.4/_px4esc-v1-1.4.<git hash>.bin")])]),a._v(" "),e("li",[a._v("Zubax GNSS v1: "),e("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/com.zubax.gnss/1.0/gnss-1.0.<git has>.bin")])]),a._v(" "),e("li",[a._v("Zubax GNSS v2: "),e("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/com.zubax.gnss/2.0/gnss-2.0.<git has>.bin")])])]),a._v(" "),e("p",[a._v("대신, UAVCAN 펌웨어 업그레이드를 다음 명령으로 직접 시작할 수 있습니다:")]),a._v(" "),e("h3",{attrs:{id:"펌웨어-업그레이드-과정-시작"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#펌웨어-업그레이드-과정-시작"}},[a._v("#")]),a._v(" 펌웨어 업그레이드 과정 시작")]),a._v(" "),e("p",[a._v("When using the PX4 Flight Stack, enable UAVCAN in the 'Power Config' section and reboot the system before attempting an UAVCAN firmware upgrade.")]),a._v(" "),e("p",[a._v("Alternatively UAVCAN firmware upgrading can be started manually on NSH via:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("uavcan start\nuavcan start fw\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);