(window.webpackJsonp=window.webpackJsonp||[]).push([[567],{2609:function(t,a,e){"use strict";e.r(a);var s=e(19),o=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"부트로더-업데이트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#부트로더-업데이트"}},[t._v("#")]),t._v(" 부트로더 업데이트")]),t._v(" "),s("p",[t._v("The "),s("em",[t._v("PX4 Bootloader")]),t._v(" is used to load firmware for "),s("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk boards")]),t._v(" (PX4FMU, PX4IO).")],1),t._v(" "),s("p",[t._v("Pixhawk controllers usually comes with an appropriate bootloader version pre-installed. However in some case it is not present, or an older version is present that needs to be updated.")]),t._v(" "),s("p",[t._v("이 섹션은 픽스호크 부트로더를 업데이트 방법을 설명합니다.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("A case where you may need to update Pixhawk boards that install FMUv2 firmware: "),s("RouterLink",{attrs:{to:"/ko/config/firmware.html#bootloader"}},[t._v("Firmware > FMUv2 Bootloader Update")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"building-the-px4-bootloader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-the-px4-bootloader"}},[t._v("#")]),t._v(" Building the PX4 Bootloader")]),t._v(" "),s("p",[t._v("FMUv6X STM32H7)로 시작하는 보드는 인트리 PX4 부트로더를 사용합니다.")]),t._v(" "),s("p",[t._v("This can be built from within the PX4-Autopilot folder using the "),s("code",[t._v("make")]),t._v(" command and the board-specific target with a "),s("code",[t._v("_bootloader")]),t._v(" suffix. For FMUv6X the command is:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v6x_bootloader\n")])])]),s("p",[t._v("This will build the bootloader binary as "),s("code",[t._v("build/px4_fmu-v6x_bootloader/px4_fmu-v6x_bootloader.elf")]),t._v(", which can be flashed via SWD or DFU. 부트로더를 빌드하는 경우 이러한 옵션중 하나를 충분히 숙지하여야합니다.")]),t._v(" "),s("p",[t._v("ELF 파일 대신 HEX 파일이 필요한 경우에는 objcopy를 사용하십시오.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("arm-none-eabi-objcopy -O ihex build/px4_fmu-v6x_bootloader/px4_fmu-v6x_bootloader.elf px4_fmu-v6x_bootloader.hex\n")])])]),s("h2",{attrs:{id:"building-the-legacy-px4-bootloader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-the-legacy-px4-bootloader"}},[t._v("#")]),t._v(" Building the Legacy PX4 Bootloader")]),t._v(" "),s("p",[t._v("PX4 boards up to FMUv5X (before STM32H7) used a legacy "),s("a",{attrs:{href:"https://github.com/PX4/Bootloader",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 bootloader"),s("OutboundLink")],1),t._v(" repository.")]),t._v(" "),s("p",[t._v("사용 방법은 README의 지침을 참조하십시오.")]),t._v(" "),s("h2",{attrs:{id:"qgc-bootloader-update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qgc-bootloader-update"}},[t._v("#")]),t._v(" QGC Bootloader Update")]),t._v(" "),s("p",[t._v("The easiest approach is to first use "),s("em",[t._v("QGroundControl")]),t._v(" to install firmware that contains the desired/latest bootloader. 그런 다음, 매개변수 "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v("를 설정하여 재시작시 부트로더 업데이트를 실행합니다.")],1),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("이 접근 방식은 "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v("가 펌웨어에 존해하는 경우에만 사용할 수 있습니다 (현재는 FMUv2 및 일부 사용자 지정 펌웨어).")],1)]),t._v(" "),s("p",[t._v("단계는 다음과 같습니다:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("SD카드를 삽입합니다 (발생할 수 있는 문제들의 디버그를 위한 부트 로그 기록을 가능하게 합니다.)")])]),t._v(" "),s("li",[s("p",[t._v("적절한 부트로더를 포함하는 이미지를 사용하여 "),s("RouterLink",{attrs:{to:"/ko/config/firmware.html#custom"}},[t._v("펌웨어를 업데이트")]),t._v("합니다.")],1),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")])])])]),t._v(" "),s("p",[t._v("업데이트된 부트로더는 사용자 정의 펌웨어(예 : 개발팀에서 제공)로 제공되거나 최신 마스터에 포함될 수 있습니다.\n:::")]),t._v(" "),s("ol",[s("li",[t._v("기체가 재부팅될 때까지 기다리십시오.")]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v(" 파라미터를 "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("찾아서 활성화")]),t._v(" 하십시오.")],1),t._v(" "),s("li",[t._v("재부팅하십시오 (보드의 연결을 끊고 다시 연결하십시오.). 부트로더 업데이트는 수 초 안에 완료됩니다.")])]),t._v(" "),s("p",[t._v("일반적으로이 시점에서 새로 설치된 부트로더를 사용하여 다시 "),s("RouterLink",{attrs:{to:"/ko/config/firmware.html"}},[t._v("펌웨어를 업데이트")]),t._v(" 할 수 있습니다.")],1),t._v(" "),s("p",[t._v("An specific example of this process for updating the FMUv2 bootloader is given below.")]),t._v(" "),s("h3",{attrs:{id:"fmuv2-bootloader-update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fmuv2-bootloader-update"}},[t._v("#")]),t._v(" FMUv2 Bootloader Update")]),t._v(" "),s("p",[t._v("If "),s("em",[t._v("QGroundControl")]),t._v(" installs the FMUv2 target (see console during installation), and you have a newer board, you may need to update the bootloader in order to access all the memory on your flight controller.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Early FMUv2 "),s("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html#fmu_versions"}},[t._v("Pixhawk-series")]),t._v(" flight controllers had a "),s("RouterLink",{attrs:{to:"/ko/flight_controller/silicon_errata.html#fmuv2-pixhawk-silicon-errata"}},[t._v("hardware issue")]),t._v(" that restricted them to using 1MB of flash memory. The problem is fixed on newer boards, but you may need to update the factory-provided bootloader in order to install FMUv3 Firmware and access all 2MB available memory.")],1)]),t._v(" "),s("p",[t._v("To update the bootloader:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("SD카드를 삽입합니다 (발생할 수 있는 문제들의 디버그를 위한 부트 로그 기록을 가능하게 합니다.)")])]),t._v(" "),s("li",[s("p",[s("RouterLink",{attrs:{to:"/ko/config/firmware.html"}},[t._v("Update the Firmware")]),t._v(" to PX4 "),s("em",[t._v("master")]),t._v(" version (when updating the firmware, check "),s("strong",[t._v("Advanced settings")]),t._v(" and then select "),s("strong",[t._v("Developer Build (master)")]),t._v(" from the dropdown list). "),s("em",[t._v("QGroundControl")]),t._v(" will automatically detect that the hardware supports FMUv2 and install the appropriate Firmware.")],1),t._v(" "),s("p",[s("img",{attrs:{src:e(355),alt:"FMUv2 업데이트"}})]),t._v(" "),s("p",[t._v("기체가 재부팅될 때까지 기다리십시오.")])]),t._v(" "),s("li",[s("p",[s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v(" 파라미터를 "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("찾아서 활성화")]),t._v(" 하십시오.")],1)]),t._v(" "),s("li",[s("p",[t._v("재부팅하십시오 (보드의 연결을 끊고 다시 연결하십시오.). 부트로더 업데이트는 수 초 안에 완료됩니다.")])]),t._v(" "),s("li",[s("p",[t._v("Then "),s("RouterLink",{attrs:{to:"/ko/config/firmware.html"}},[t._v("Update the Firmware")]),t._v(" again. This time "),s("em",[t._v("QGroundControl")]),t._v(" should autodetect the hardware as FMUv3 and update the Firmware appropriately.")],1),t._v(" "),s("p",[s("img",{attrs:{src:e(467),alt:"FMUv3 update"}})])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("If the hardware has the "),s("RouterLink",{attrs:{to:"/ko/flight_controller/silicon_errata.html#fmuv2-pixhawk-silicon-errata"}},[t._v("Silicon Errata")]),t._v(" it will still be detected as FMUv2 and you will see that FMUv2 was re-installed (in console). In this case you will not be able to install FMUv3 hardware.")],1)]),t._v(" "),s("h2",{attrs:{id:"dronecode-probe-부트로더-업데이트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dronecode-probe-부트로더-업데이트"}},[t._v("#")]),t._v(" Dronecode Probe 부트로더 업데이트")]),t._v(" "),s("p",[t._v("아래에서 dronecode probe를 사용하여 수동 부트로더 업데이트 방법을 설명합니다:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("부트로더를 포함한 바이너리를 만드십시오 (개발자 팀에서 다운받거나, 직접 소스를 빌드하십시오).")])]),t._v(" "),s("li",[s("p",[t._v("USB로 컴퓨터와 Dronecode probe를 연결하십시오.")])]),t._v(" "),s("li",[s("p",[t._v("바이너리가 들어 있는 디렉토리에서 아래 커맨드를 터미널에 입력하십시오.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n  arm-none-eabi-gdb px4fmuv5_bl.elf\n")])])])]),t._v(" "),s("li",[s("p",[t._v("The "),s("em",[t._v("gdb terminal")]),t._v(" appears and it should display the following output:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n  GNU gdb "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GNU Tools "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Arm Embedded Processors "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("-2017-q4-major"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.0")]),t._v(".50.20171128-git\n  Copyright "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v(" Free Software Foundation, Inc. License GPLv3+: GNU GPL version "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" or later "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://gnu.org/licenses/gpl.html"')]),t._v(" x-nc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("http://gnu.org/licenses/gpl.html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  This is "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" software: you are "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\nType "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"show copying"')]),t._v("    and "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"show warranty"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" details.\nThis GDB was configured as "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--host=x86_64-linux-gnu --target=arm-none-eabi"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\nType "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"show configuration"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" configuration details.\nFor bug reporting instructions, please see:\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.gnu.org/software/gdb/bugs/"')]),t._v(" x-nc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("http://www.gnu.org/software/gdb/bugs/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".\nFind the GDB manual and other documentation resources online at:\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.gnu.org/software/gdb/documentation/"')]),t._v(" x-nc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("http://www.gnu.org/software/gdb/documentation/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".\nFor help, "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"help"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\nType "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apropos word"')]),t._v(" to search "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" commands related to "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"word"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nReading symbols from px4fmuv5_bl.elf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".done.\n")])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("/dev/serial/by-id")]),t._v(" 디렉토리에서 ls 커맨드를 입력해 "),s("code",[t._v("<dronecode-probe-id>")]),t._v("를 찾으십시오.")])]),t._v(" "),s("li",[s("p",[t._v("아래 커맨드로 Dronecode probe에 연결하십시오:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" ext /dev/serial/by-id/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("dronecode-probe-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Pixhawk를 다른 USB 케이블로 전원을 넣고, FMU-DEBUG 포트로 Dronecode probe에 연결하십시오.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")])])])]),t._v(" "),s("p",[t._v("Dronecode 프로브를 FMU-DEBUG 포트에 연결하려면 케이스를 제거해야 할 수 있습니다 (예 : Pixhawk 4에서는 T6 Torx 드라이버를 사용하여이 작업을 수행합니다).\n:::")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("아래 커맨드로 Pixhawk의 swd를 스캔하고 연결하십시오:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" mon swdp_scan\n")])])])])]),t._v(" "),s("p",[t._v("(gdb) attach 1")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n1. 이제 바이너리를 픽스호크에 로드하십시오:\n\n```sh\n(gdb) load\n")])])]),s("p",[t._v("After the bootloader has updated you can "),s("RouterLink",{attrs:{to:"/ko/config/firmware.html"}},[t._v("Load PX4 Firmware")]),t._v(" using "),s("em",[t._v("QGroundControl")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"기타-보드-non-pixhawk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기타-보드-non-pixhawk"}},[t._v("#")]),t._v(" 기타 보드 (Non-Pixhawk)")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk 시리즈")]),t._v("가 아닌 보드는 자체적인 부트로더 업데이트 방식이 있습니다.")],1),t._v(" "),s("p",[t._v("Betaflight로 사전 플래싱된 보드에 대해서는 "),s("RouterLink",{attrs:{to:"/ko/advanced_config/bootloader_update_from_betaflight.html"}},[t._v("Betaflight 시스템 부트로더 플래싱")]),t._v("을 참조하십시오.")],1)])}),[],!1,null,null,null);a.default=o.exports},355:function(t,a,e){t.exports=e.p+"assets/img/bootloader_update.bd69dc9b.jpg"},467:function(t,a,e){t.exports=e.p+"assets/img/bootloader_fmu_v3_update.138bc25e.jpg"}}]);