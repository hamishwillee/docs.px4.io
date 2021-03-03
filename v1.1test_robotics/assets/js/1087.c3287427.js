(window.webpackJsonp=window.webpackJsonp||[]).push([[1087],{2258:function(a,e,t){"use strict";t.r(e);var s=t(18),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"uavcan-부트로더-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-부트로더-설치"}},[a._v("#")]),a._v(" UAVCAN 부트로더 설치")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("UAVCAN")]),a._v(" "),t("p",[a._v("장치는 보통 부트로더를 미리 심어넣은 상태로 나옵니다. UAVCAN 장치를 직접 개발할 의도가 아니라면 이 절의 절차는 따르지 마십시오.")])]),a._v(" "),t("h2",{attrs:{id:"개요"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#개요"}},[a._v("#")]),a._v(" 개요")]),a._v(" "),t("p",[a._v("PX4 프로젝트에서는 STM32 장치용 표준 UAVCAN 부트로더를 다룹니다.")]),a._v(" "),t("p",[a._v("부트로더는 처음 8~16KB 플래시 메모리 영역을 차지하며, 처음 코드는 전원을 켰을 때 실행합니다. 보통 부트로더는 저수준 장치 초기화, CAN 버스 전송률 자동 결정, 고유 노드 ID 획득을 위한 UAVCAN 동적 노드 ID 클라이언트 동작, 프로그램 부팅 진행 전 비행체 제어 장치 응답 확인 과정을 수행합니다.")]),a._v(" "),t("p",[a._v("이 과정에서는 사용자의 개입 없이 UAVCAN 장치를 잘못된, 프로그램이 손상된 펌웨어 상태로부터 복원할 수 있으며, 자동 펌웨어 업데이트를 수행합니다.")]),a._v(" "),t("h2",{attrs:{id:"준비-요건"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#준비-요건"}},[a._v("#")]),a._v(" 준비 요건")]),a._v(" "),t("p",[a._v("UAVCAN 부트로더 설치 및 업데이트는 다음 과정이 필요합니다:")]),a._v(" "),t("ul",[t("li",[a._v("SWD 또는 JTAG 인터페이스(장치에 따라 다름). 예:"),t("a",{attrs:{href:"https://github.com/blacksphere/blackmagic/wiki",target:"_blank",rel:"noopener noreferrer"}},[a._v("블랙매직 프루브"),t("OutboundLink")],1),a._v(" 또는 "),t("a",{attrs:{href:"http://www.st.com/internet/evalboard/product/251168.jsp",target:"_blank",rel:"noopener noreferrer"}},[a._v("ST-Link v2"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("li",[a._v("어댑터 케이블로 SWD 또는 JTAG 인터페이스에서 UAVCAN 장치 디버깅 포트로 연결하십시오.")]),a._v(" "),t("li",[t("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[a._v("지원하는 ARM 툴체인 목록은 이와 같습니다")]),a._v(".")],1)]),a._v(" "),t("h2",{attrs:{id:"장치-준비"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#장치-준비"}},[a._v("#")]),a._v(" 장치 준비")]),a._v(" "),t("p",[a._v("아래 명령으로 장치에 연결할 수 없을 경우, 장치의 펌웨어에서 MCU의 디버깅 핀을 막아두었을 수 있습니다. 이 상황을 해결하려면, 인터페이스의 NRST핀 또는 nSRST핀(표준 ARM 20핀 커넥터의 15번째 핀)을 MCU의 NRST 핀에 연결해야합니다. 자세한 내용은 장치 구성도와 PCB 배치도를 확보하거나 제조사에 연락해보십시오.")]),a._v(" "),t("h2",{attrs:{id:"설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#설치"}},[a._v("#")]),a._v(" 설치")]),a._v(" "),t("p",[a._v("이 진행 과정은 SWE 또는 JTAG 사용 인터페이스에 따라 다릅니다.")]),a._v(" "),t("p",[a._v("블랙매직 프루브의 "),t("a",{attrs:{href:"https://github.com/blacksphere/blackmagic/wiki/Hacking",target:"_blank",rel:"noopener noreferrer"}},[a._v("펌웨어가 최신"),t("OutboundLink")],1),a._v("인지 확인하십시오.")]),a._v(" "),t("h2",{attrs:{id:"블랙매직-프루브"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#블랙매직-프루브"}},[a._v("#")]),a._v(" 블랙매직 프루브")]),a._v(" "),t("p",[a._v("BlackMagic Probe의 "),t("a",{attrs:{href:"https://github.com/blacksphere/blackmagic/wiki/Hacking",target:"_blank",rel:"noopener noreferrer"}},[a._v("펌웨어가 최신"),t("OutboundLink")],1),a._v("인지 확인하십시오.")]),a._v(" "),t("p",[a._v("프루브를 UAVCAN 장치에  연결하고, 컴퓨터에도 연결하십시오.")]),a._v(" "),t("p",[a._v("프루브 장치 이름을 확인하십시오. 보통 "),t("code",[a._v("/dev/ttyACM<x>")]),a._v(" 또는 "),t("code",[a._v("/dev/ttyUSB<x>")]),a._v("입니다.")]),a._v(" "),t("p",[a._v("UAVCAN 장치의 전원을 켜고 다음 명령을 실행하십시오:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("arm-none-eabi-gdb /path/to/your/bootloader/image.elf\n")])])]),t("p",[t("code",[a._v("monitor swdp_scan")]),a._v(" 명령에서 오류가 나타났을 경우 결선을 제대로 했는지, 블랙매직 펌웨어가 최신인지 확인하십시오.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("target extended /dev/ttyACM0\nmonitor connect_srst "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v("\nmonitor swdp_scan\nattach "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" mem inaccessible-by-default off\nload\nrun\n")])])]),t("p",[t("a",{attrs:{href:"http://openocd.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("OpenOCD"),t("OutboundLink")],1),a._v(" 버전이 최소한 0.9.0의 최근 버전인지 확인하십시오.")]),a._v(" "),t("h2",{attrs:{id:"st-link-v2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#st-link-v2"}},[a._v("#")]),a._v(" ST-Link v2")]),a._v(" "),t("p",[a._v("ST-Link 를 UAVCAN 장치에 연결하고, 컴퓨터에도 연결하십시오.")]),a._v(" "),t("p",[a._v("UAVCAN 장치의 전원을 켜고 다음 명령을 실행하십시오:")]),a._v(" "),t("p",[t("code",[a._v("gdb")]),a._v(" 프롬프트에서 다음 명령을 실행하십시오:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("openocd -f /path/to/your/openocd.cfg "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\narm-none-eabi-gdb /path/to/your/bootloader/image.elf\n")])])]),t("p",[a._v("JLink 디버거를 UAVCAN 장치에 연결하고 JLink 디버거를 컴퓨터에 연결하십시오.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("target extended-remote localhost:3333\nmonitor reset "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("halt")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" mem inaccessible-by-default off\nload\nrun\n")])])]),t("h2",{attrs:{id:"segger-j-link-디버거"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#segger-j-link-디버거"}},[a._v("#")]),a._v(" Segger J-Link 디버거")]),a._v(" "),t("p",[a._v("UAVCAN 장치의 전원을 켜고 다음 명령을 실행하십시오:")]),a._v(" "),t("p",[a._v("두번째 터미널을 열어 px4esc_1_6-bootloader.elf 파일이 들어있는 디렉터리를 찾아 다음 명령을 실행하십시오:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("JLinkGDBServer -select USB=0 -device STM32F446RE -if SWD-DP -speed 20000 -vd\n")])])]),t("p",[t("code",[a._v("gdb")]),a._v(" 프롬프트에서 다음 명령을 실행하십시오:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("arm-none-eabi-gdb px4esc_1_6-bootloader.elf\n")])])]),t("p",[t("code",[a._v("gdb")]),a._v(" 프롬프트에서 다음 명령을 실행하십시오:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tar ext :2331\nload\n")])])]),t("h2",{attrs:{id:"segger-jlink-디버거로-플래시-소거"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#segger-jlink-디버거로-플래시-소거"}},[a._v("#")]),a._v(" SEGGER JLink 디버거로 플래시 소거")]),a._v(" "),t("p",[a._v("복구 방안으로 플래시를 공장 초기 상태로 소거할 쓸만한 방안이 있으며 이 경우 펌웨어는 기본 매개변수 값을 활용합니다. SEGGER 설치 디렉터리로 이동하고 JLinkExe 프로그램을 가동한 후 다음 명령을 실행하십시오:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("device <name-of-device>\nerase\n")])])]),t("p",[t("code",[a._v("<name-of-device>")]),a._v("을 STM32F446RE for the Pixhawk ESC 1.6 또는 STM32F302K8 for the SV2470VC ESC와 같은 마이크로컨트롤러 이름으로 바꾸십시오.")])])}),[],!1,null,null,null);e.default=r.exports}}]);