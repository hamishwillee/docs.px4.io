(window.webpackJsonp=window.webpackJsonp||[]).push([[1505],{2720:function(a,e,t){"use strict";t.r(e);var s=t(19),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"uavcan-부트로더-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-부트로더-설치"}},[a._v("#")]),a._v(" UAVCAN 부트로더 설치")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("UAVCAN")]),a._v(" "),t("p",[a._v("장치는 일반적으로 부트로더가 설치되어 판매됩니다. UAVCAN 장치를 개발하지 않는다면, 이 섹션의 설명들을 참고하지 마십시오.")])]),a._v(" "),t("h2",{attrs:{id:"개요"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#개요"}},[a._v("#")]),a._v(" 개요")]),a._v(" "),t("p",[a._v("PX4에는 STM32 표준 UAVCAN 부트로더가 포함되어 있습니다.")]),a._v(" "),t("p",[a._v("부트로더는 플래시의 처음 8-16KB를 차지하며, 전원을 켤 때 실행되는 첫 번째 코드입니다. 일반적으로 부트로더는 저수준의 장치 초기화 수행, CAN 버스 전송 속도 결정, 그리고 UAVCAN 동적 노드 ID 클라이언트로 작동하여 고유한 노드 ID를 얻고, 응용 프로그램 부팅을 진행하기 전에 비행 콘트롤러의 확인을 기다립니다.")]),a._v(" "),t("p",[a._v("이 프로세스는 UAVCAN 장치가 사용자 개입 없이 유효하지 않거나 손상된 응용 프로그램 펌웨어에서 복구하고, 자동 펌웨어 업데이트도 허용합니다.")]),a._v(" "),t("h2",{attrs:{id:"전제-조건"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#전제-조건"}},[a._v("#")]),a._v(" 전제 조건")]),a._v(" "),t("p",[a._v("UAVCAN 부트로더 설치와 업데이트에는 다음 과정이 필요합니다:")]),a._v(" "),t("ul",[t("li",[a._v("SWD 또는 JTAG 인터페이스(기기에 따라 다름)(예: "),t("a",{attrs:{href:"https://github.com/blacksphere/blackmagic/wiki",target:"_blank",rel:"noopener noreferrer"}},[a._v("BlackMagic Probe"),t("OutboundLink")],1),a._v(" 또는 "),t("a",{attrs:{href:"http://www.st.com/internet/evalboard/product/251168.jsp",target:"_blank",rel:"noopener noreferrer"}},[a._v("ST-Link v2"),t("OutboundLink")],1),a._v(")")]),a._v(" "),t("li",[a._v("SWD 또는 JTAG 인터페이스를 UAVCAN 장치의 디버깅 포트에 연결하는 어댑터 케이블")]),a._v(" "),t("li",[t("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[a._v("호환 ARM 도구 모음")]),a._v(".")],1)]),a._v(" "),t("h2",{attrs:{id:"장치-준비"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#장치-준비"}},[a._v("#")]),a._v(" 장치 준비")]),a._v(" "),t("p",[a._v("아래 지침을 사용하여 장치에 연결할 수 없으면, 장치에 이미 있는 펌웨어가 MCU의 디버그 핀을 비활성화되어 있을 수 있습니다. 이를 복구하려면, 인터페이스의 NRST 또는 nSRST 핀(표준 ARM 20핀 커넥터의 핀 15)을 MCU의 NRST 핀에 연결하여야 합니다. 장치 회로도 및 PCB 레이아웃을 얻거나, 자세한 내용을 제조업체에 문의하십시오.")]),a._v(" "),t("h2",{attrs:{id:"설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#설치"}},[a._v("#")]),a._v(" 설치")]),a._v(" "),t("p",[a._v("장치의 부트로더 이미지를 컴파일하거나, 가져온 후(자세한 내용은 장치 설명서 참조) 부트로더를 장치의 플래시 메모리 시작 부분에 복사하여야 합니다.")]),a._v(" "),t("p",[a._v("이를 수행하는 프로세스는 사용된 SWD 또는 JTAG 인터페이스에 따라 차이가 납니다.")]),a._v(" "),t("h2",{attrs:{id:"blackmagic-probe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blackmagic-probe"}},[a._v("#")]),a._v(" BlackMagic Probe")]),a._v(" "),t("p",[a._v("BlackMagic Probe "),t("a",{attrs:{href:"https://github.com/blacksphere/blackmagic/wiki/Hacking",target:"_blank",rel:"noopener noreferrer"}},[a._v("펌웨어가 최신 버전"),t("OutboundLink")],1),a._v("인지 확인하십시오.")]),a._v(" "),t("p",[a._v("프로브를 UAVCAN 장치에 연결하고, 프로브를 컴퓨터에 연결합니다.")]),a._v(" "),t("p",[a._v("프루브 장치 이름을 확인하십시오. 장치명은 보통 "),t("code",[a._v("/dev/ttyACM<x>")]),a._v(" 또는 "),t("code",[a._v("/dev/ttyUSB<x>")]),a._v("입니다.")]),a._v(" "),t("p",[a._v("UAVCAN 장치를 켜고, 다음 명령을 실행하십시오:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("arm-none-eabi-gdb /path/to/your/bootloader/image.elf\n")])])]),t("p",[t("code",[a._v("gdb")]),a._v(" 프롬프트에서 다음을 실행합니다.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("target extended /dev/ttyACM0\nmonitor connect_srst "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v("\nmonitor swdp_scan\nattach "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" mem inaccessible-by-default off\nload\nrun\n")])])]),t("p",[t("code",[a._v("monitor swdp_scan")]),a._v("이 오류를 반환하면, 배선이 올바르고 BlackMagic 펌웨어의 최신 버전이 있는 지 확인하십시오.")]),a._v(" "),t("h2",{attrs:{id:"st-link-v2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#st-link-v2"}},[a._v("#")]),a._v(" ST-Link v2")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://openocd.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("OpenOCD"),t("OutboundLink")],1),a._v("의 최신 버전(최소 0.9.0)이 있는지 확인하십시오.")]),a._v(" "),t("p",[a._v("ST-Link를 UAVCAN 장치에 연결하고, ST-Link를 컴퓨터에 연결합니다.")]),a._v(" "),t("p",[a._v("UAVCAN 장치를 켜고, 다음 명령을 실행하십시오:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("openocd -f /path/to/your/openocd.cfg "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\narm-none-eabi-gdb /path/to/your/bootloader/image.elf\n")])])]),t("p",[t("code",[a._v("gdb")]),a._v(" 프롬프트에서 다음을 실행합니다.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("target extended-remote localhost:3333\nmonitor reset "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("halt")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" mem inaccessible-by-default off\nload\nrun\n")])])]),t("h2",{attrs:{id:"segger-j-link-디버거"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#segger-j-link-디버거"}},[a._v("#")]),a._v(" Segger J-Link 디버거")]),a._v(" "),t("p",[a._v("JLink 디버거를 UAVCAN 장치에 연결하고, JLink 디버거를 컴퓨터에 연결합니다.")]),a._v(" "),t("p",[a._v("UAVCAN 장치를 켜고, 다음 명령을 실행하십시오:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("JLinkGDBServer -select USB=0 -device STM32F446RE -if SWD-DP -speed 20000 -vd\n")])])]),t("p",[a._v("두 번째 터미널을 열고, esc용 px4esc_1_6-bootloader.elf가 포함된 디렉토리로 이동하여 다음을 실행합니다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("arm-none-eabi-gdb px4esc_1_6-bootloader.elf\n")])])]),t("p",[t("code",[a._v("gdb")]),a._v(" 프롬프트에서 다음을 실행합니다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tar ext :2331\nload\n")])])]),t("h2",{attrs:{id:"segger-jlink-디버거로-플래시-지우기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#segger-jlink-디버거로-플래시-지우기"}},[a._v("#")]),a._v(" SEGGER JLink 디버거로 플래시 지우기")]),a._v(" "),t("p",[a._v("복구 방법으로 펌웨어가 기본 매개변수를 사용하도록 플래시를 공장 기본값으로 지우는 것이 간단한 방법입니다. SEGGER 설치 디렉터리로 이동하여 JLinkExe를 시작한 다음 다음을 실행합니다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("device <name-of-device>\nerase\n")])])]),t("p",[t("code",[a._v("<name-of-device>")]),a._v("을 STM32F446RE for the Pixhawk ESC 1.6 또는 STM32F302K8 for the SV2470VC ESC와 같은 마이크로컨트롤러 이름으로 변경하십시오.")])])}),[],!1,null,null,null);e.default=r.exports}}]);