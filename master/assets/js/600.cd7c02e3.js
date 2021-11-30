(window.webpackJsonp=window.webpackJsonp||[]).push([[600],{2117:function(t,e,o){"use strict";o.r(e);var r=o(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"부트로더-업데이트"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#부트로더-업데이트"}},[t._v("#")]),t._v(" 부트로더 업데이트")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/PX4/Bootloader",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 부트로더"),r("OutboundLink")],1),t._v("는 픽스호크 보드(PX4FMU, PX4IO)와 PX4FLOW에 펌웨어를 불러오는 데 사용됩니다.")]),t._v(" "),r("p",[t._v("이 섹션은 픽스호크 부트로더를 업데이트 방법을 설명합니다.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("하드웨어는 일반적으로 미리 설치된 부트로더를 제공합니다. 업데이트가 필요한 경우는 FMUv2 펌웨어를 사용하는 최신 Pixhawk 보드입니다 : "),r("RouterLink",{attrs:{to:"/ko/config/firmware.html#bootloader"}},[t._v("펌웨어 > FMUv2 부트로더 업데이트")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"px4-부트로더-직접-빌드"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-부트로더-직접-빌드"}},[t._v("#")]),t._v(" PX4 부트로더 직접 빌드")]),t._v(" "),r("p",[t._v("FMUv6X STM32H7)로 시작하는 보드는 인트리 PX4 부트로더를 사용합니다. 이전 보드는 레거시 "),r("a",{attrs:{href:"https://github.com/PX4/Bootloader",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 부트로더"),r("OutboundLink")],1),t._v(" 저장소의 부트로더를 사용합니다. 사용 방법은 README의 지침을 참조하십시오.")]),t._v(" "),r("p",[t._v("다음을 사용하여 PX4-Autopilot 폴더에 새 부트로더를 빌드합니다.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("make px4_fmu-v6x_bootloader\n")])])]),r("p",[t._v("부트로더 바이너리를 "),r("code",[t._v("build/px4_fmu-v6x_bootloader/px4_fmu-v6x_bootloader.elf")]),t._v("로 빌드하며 SWD 또는 DFU를 통해 플래시 할 수 있습니다. 부트로더를 빌드하는 경우 이러한 옵션중 하나를 충분히 숙지하여야합니다.")]),t._v(" "),r("p",[t._v("ELF 파일 대신 HEX 파일이 필요한 경우에는 objcopy를 사용하십시오.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("arm-none-eabi-objcopy -O ihex build/px4_fmu-v6x_bootloader/px4_fmu-v6x_bootloader.elf px4_fmu-v6x_bootloader.hex\n")])])]),r("p",[r("span",{attrs:{id:"qgc_bootloader_update"}})]),t._v(" "),r("h2",{attrs:{id:"qgroundcontrol-부트로더-업데이트"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-부트로더-업데이트"}},[t._v("#")]),t._v(" QGroundControl 부트로더 업데이트")]),t._v(" "),r("p",[t._v("가장 쉬운 방법은 먼저 "),r("em",[t._v("QGroundControl")]),t._v("을 사용하여 원하는 최신 부트로더를 이용하여 펌웨어를 설치하는 것입니다. 그런 다음, 매개변수 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v("를 설정하여 재시작시 부트로더 업데이트를 실행합니다.")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("이 접근 방식은 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v("가 펌웨어에 존해하는 경우에만 사용할 수 있습니다 (현재는 FMUv2 및 일부 사용자 지정 펌웨어).")],1)]),t._v(" "),r("p",[t._v("단계는 다음과 같습니다:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("SD카드를 삽입합니다 (발생할 수 있는 문제들의 디버그를 위한 부트 로그 기록을 가능하게 합니다.)")])]),t._v(" "),r("li",[r("p",[t._v("적절한 부트로더를 포함하는 이미지를 사용하여 "),r("RouterLink",{attrs:{to:"/ko/config/firmware.html#custom"}},[t._v("펌웨어를 업데이트")]),t._v("합니다. :::note 업데이트된 부트로더는 사용자 정의 펌웨어(예 : 개발팀에서 제공)로 제공되거나 최신 마스터에 포함될 수 있습니다.\n:::")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(343),alt:"FMUv2 업데이트"}})])]),t._v(" "),r("li",[r("p",[t._v("기체가 재부팅될 때까지 기다리십시오.")])]),t._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v(" 파라미터를 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("찾아서 활성화")]),t._v(" 하십시오.")],1)]),t._v(" "),r("li",[r("p",[t._v("재부팅하십시오 (보드의 연결을 끊고 다시 연결하십시오.). 부트로더 업데이트는 수 초 안에 완료됩니다.")])])]),t._v(" "),r("p",[t._v("일반적으로이 시점에서 새로 설치된 부트로더를 사용하여 다시 "),r("RouterLink",{attrs:{to:"/ko/config/firmware.html"}},[t._v("펌웨어를 업데이트")]),t._v(" 할 수 있습니다.")],1),t._v(" "),r("p",[r("span",{attrs:{id:"dronecode_probe"}})]),t._v(" "),r("h3",{attrs:{id:"dronecode-probe-부트로더-업데이트"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dronecode-probe-부트로더-업데이트"}},[t._v("#")]),t._v(" Dronecode Probe 부트로더 업데이트")]),t._v(" "),r("p",[t._v("아래에서 dronecode probe를 사용하여 수동 부트로더 업데이트 방법을 설명합니다:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("부트로더를 포함한 바이너리를 만드십시오 (개발자 팀에서 다운받거나, 직접 소스를 빌드하십시오).")])]),t._v(" "),r("li",[r("p",[t._v("USB로 컴퓨터와 Dronecode probe를 연결하십시오.")])]),t._v(" "),r("li",[r("p",[t._v("바이너리가 들어 있는 디렉토리에서 아래 커맨드를 터미널에 입력하십시오.\nbash\narm-none-eabi-gdb px4fmuv5_bl.elf")])]),t._v(" "),r("li",[r("p",[r("em",[t._v("gdb terminal")]),t._v("이 나타나고, 아래와 같은 결과를 출력합니다.\nbash\nGNU gdb (GNU Tools for Arm Embedded Processors 7-2017-q4-major) 8.0.50.20171128-git\nCopyright (C) 2017 Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version 3 or later "),r("a",{attrs:{href:"http://gnu.org/licenses/gpl.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://gnu.org/licenses/gpl.html"),r("OutboundLink")],1),t._v('\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.  Type "show copying"\nand "show warranty" for details.\nThis GDB was configured as "--host=x86_64-linux-gnu --target=arm-none-eabi".\nType "show configuration" for configuration details.\nFor bug reporting instructions, please see:\n'),r("a",{attrs:{href:"http://www.gnu.org/software/gdb/bugs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.gnu.org/software/gdb/bugs/"),r("OutboundLink")],1),t._v(".\nFind the GDB manual and other documentation resources online at:\n"),r("a",{attrs:{href:"http://www.gnu.org/software/gdb/documentation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.gnu.org/software/gdb/documentation/"),r("OutboundLink")],1),t._v('.\nFor help, type "help".\nType "apropos word" to search for commands related to "word"...\nReading symbols from px4fmuv5_bl.elf...done.')])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("/dev/serial/by-id")]),t._v(" 디렉토리에서 ls 커맨드를 입력해 "),r("code",[t._v("<dronecode-probe-id>")]),t._v("를 찾으십시오.")])]),t._v(" "),r("li",[r("p",[t._v("아래 커맨드로 Dronecode probe에 연결하십시오: "),r("code",[t._v("tar ext /dev/serial/by-id/<dronecode-probe-id>")])])]),t._v(" "),r("li",[r("p",[t._v("Pixhawk를 다른 USB 케이블로 전원을 넣고, FMU-DEBUG 포트로 Dronecode probe에 연결하십시오.")])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("Dronecode 프로브를 FMU-DEBUG 포트에 연결하려면 케이스를 제거해야 할 수 있습니다 (예 : Pixhawk 4에서는 T6 Torx 드라이버를 사용하여이 작업을 수행합니다).")])]),t._v(" "),r("ol",{attrs:{start:"8"}},[r("li",[r("p",[t._v("아래 커맨드로 Pixhawk의 swd를 스캔하고 연결하십시오:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v(" (gdb) mon swdp_scan\n (gdb) attach 1\n")])])])]),t._v(" "),r("li",[r("p",[t._v("이제 바이너리를 픽스호크에 로드하십시오: "),r("code",[t._v("(gdb) load")])])])]),t._v(" "),r("p",[t._v("부트로더가 업데이트된 후에는 "),r("em",[t._v("Qgroundcontrol")]),t._v("을 사용하여 "),r("RouterLink",{attrs:{to:"/ko/config/firmware.html"}},[t._v("PX4 펌웨어를 로드할 수 있습니다")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"기타-보드-non-pixhawk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#기타-보드-non-pixhawk"}},[t._v("#")]),t._v(" 기타 보드 (Non-Pixhawk)")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk 시리즈")]),t._v("가 아닌 보드는 자체적인 부트로더 업데이트 방식이 있습니다.")],1),t._v(" "),r("p",[t._v("Betaflight로 사전 플래싱된 보드에 대해서는 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/bootloader_update_from_betaflight.html"}},[t._v("Betaflight 시스템 부트로더 플래싱")]),t._v("을 참조하십시오.")],1)])}),[],!1,null,null,null);e.default=a.exports},343:function(t,e,o){t.exports=o.p+"assets/img/bootloader_update.8826d78f.jpg"}}]);