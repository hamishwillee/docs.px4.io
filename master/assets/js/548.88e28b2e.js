(window.webpackJsonp=window.webpackJsonp||[]).push([[548],{1832:function(e,t,o){"use strict";o.r(t);var r=o(18),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"부트로더-업데이트"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#부트로더-업데이트"}},[e._v("#")]),e._v(" 부트로더 업데이트")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/PX4/Bootloader",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 부트로더"),r("OutboundLink")],1),e._v("는 픽스호크 보드(PX4FMU, PX4IO)와 PX4FLOW에 펌웨어를 불러오는 데 사용됩니다.")]),e._v(" "),r("p",[e._v("이 절에서는 픽스호크 부트로더를 업데이트하는 여러가지 방법을 설명합니다.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("Hardware usually comes with an appropriate bootloader version pre-installed. A case where you may need to update is newer Pixhawk boards that install FMUv2 firmware: "),r("RouterLink",{attrs:{to:"/ko/config/firmware.html#bootloader"}},[e._v("Firmware > FMUv2 Bootloader Update")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"building-the-new-px4-bootloader-yourself"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#building-the-new-px4-bootloader-yourself"}},[e._v("#")]),e._v(" Building the new PX4 bootloader yourself")]),e._v(" "),r("p",[e._v("Boards starting with FMUv6X (STM32H7) use the in-tree PX4 bootloader. Older boards use the bootloader from the legacy "),r("a",{attrs:{href:"https://github.com/PX4/Bootloader",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 bootloader"),r("OutboundLink")],1),e._v(" repository. Please refer to the instructions in the README to learn how to use it.")]),e._v(" "),r("p",[e._v("Build the new bootloader in the PX4-Autopilot folder with:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("make px4_fmu-v6x_bootloader\n")])])]),r("p",[e._v("Which will build the bootloader binary as "),r("code",[e._v("build/px4_fmu-v6x_bootloader/px4_fmu-v6x_bootloader.elf")]),e._v(" which can be flashed via SWD or DFU. If you are building the bootloader you should be familiar with one of these options already.")]),e._v(" "),r("p",[e._v("If you need a HEX file instead of an ELF file, use objcopy:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("arm-none-eabi-objcopy -O ihex build/px4_fmu-v6x_bootloader/px4_fmu-v6x_bootloader.elf px4_fmu-v6x_bootloader.hex\n")])])]),r("p",[r("span",{attrs:{id:"qgc_bootloader_update"}})]),e._v(" "),r("h2",{attrs:{id:"qgroundcontrol-bootloader-update"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-bootloader-update"}},[e._v("#")]),e._v(" QGroundControl Bootloader Update")]),e._v(" "),r("p",[e._v("The easiest approach is to first use "),r("em",[e._v("QGroundControl")]),e._v(" to install firmware with the desired/latest bootloader. You can then initiate bootloader update on next restart by setting the parameter: "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[e._v("SYS_BL_UPDATE")]),e._v(".")],1),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("This approach can only be used if "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[e._v("SYS_BL_UPDATE")]),e._v(" is present in firmware (currently just FMUv2 and some custom firmware).")],1)]),e._v(" "),r("p",[e._v("The steps are:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("SD카드를 삽입합니다 (발생할 수 있는 문제들의 디버그를 위한 부트 로그 기록을 가능하게 합니다.)")])]),e._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/ko/config/firmware.html#custom"}},[e._v("Update the Firmware")]),e._v(" with an image containing the new/desired bootloader. :::note The updated bootloader might be supplied in custom firmware (i.e. from the dev team), or it or may be included in the latest master.\n:::")],1),e._v(" "),r("p",[r("img",{attrs:{src:o(375),alt:"FMUv2 업데이트"}})])]),e._v(" "),r("li",[r("p",[e._v("기체가 재부팅 될 때까지 기다리십시오.")])]),e._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[e._v("SYS_BL_UPDATE")]),e._v(" 파라미터를 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[e._v("찾아서 활성화")]),e._v(" 하십시오.")],1)]),e._v(" "),r("li",[r("p",[e._v("재부팅하십시오 (보드의 연결을 끊고 다시 연결하십시오.). 부트로더 업데이트는 수 초 안에 완료됩니다.")])])]),e._v(" "),r("p",[e._v("Generally at this point you may then want to "),r("RouterLink",{attrs:{to:"/ko/config/firmware.html"}},[e._v("update the firmware")]),e._v(" again using the correct/newly installed bootloader.")],1),e._v(" "),r("p",[r("span",{attrs:{id:"dronecode_probe"}})]),e._v(" "),r("h3",{attrs:{id:"dronecode-probe-bootloader-update"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dronecode-probe-bootloader-update"}},[e._v("#")]),e._v(" Dronecode Probe Bootloader Update")]),e._v(" "),r("p",[e._v('The following steps explain how you can "manually" update the bootloader using the dronecode probe:')]),e._v(" "),r("ol",[r("li",[r("p",[e._v("부트로더를 포함한 바이너리를 만드십시오 (개발자 팀에서 다운받거나, 직접 소스를 빌드하십시오).")])]),e._v(" "),r("li",[r("p",[e._v("USB로 컴퓨터와 Dronecode probe를 연결하십시오.")])]),e._v(" "),r("li",[r("p",[e._v("바이너리가 들어 있는 디렉토리에서 아래 커맨드를 터미널에 입력하십시오.\nbash\narm-none-eabi-gdb px4fmuv5_bl.elf")])]),e._v(" "),r("li",[r("p",[r("em",[e._v("gdb terminal")]),e._v("이 나타나고, 아래와 같은 결과를 출력합니다.\nbash\nGNU gdb (GNU Tools for Arm Embedded Processors 7-2017-q4-major) 8.0.50.20171128-git\nCopyright (C) 2017 Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version 3 or later "),r("a",{attrs:{href:"http://gnu.org/licenses/gpl.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://gnu.org/licenses/gpl.html"),r("OutboundLink")],1),e._v('\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.  Type "show copying"\nand "show warranty" for details.\nThis GDB was configured as "--host=x86_64-linux-gnu --target=arm-none-eabi".\nType "show configuration" for configuration details.\nFor bug reporting instructions, please see:\n'),r("a",{attrs:{href:"http://www.gnu.org/software/gdb/bugs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.gnu.org/software/gdb/bugs/"),r("OutboundLink")],1),e._v(".\nFind the GDB manual and other documentation resources online at:\n"),r("a",{attrs:{href:"http://www.gnu.org/software/gdb/documentation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.gnu.org/software/gdb/documentation/"),r("OutboundLink")],1),e._v('.\nFor help, type "help".\nType "apropos word" to search for commands related to "word"...\nReading symbols from px4fmuv5_bl.elf...done.')])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("/dev/serial/by-id")]),e._v(" 디렉토리에서 ls 커맨드를 입력해 "),r("code",[e._v("<dronecode-probe-id>")]),e._v("를 찾으십시오.")])]),e._v(" "),r("li",[r("p",[e._v("아래 커맨드로 Dronecode probe에 연결하십시오: "),r("code",[e._v("tar ext /dev/serial/by-id/<dronecode-probe-id>")])])]),e._v(" "),r("li",[r("p",[e._v("Pixhawk를 다른 USB 케이블로 전원을 넣고, FMU-DEBUG 포트로 Dronecode probe에 연결하십시오.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("To be able to connect the Dronecode probe to the FMU-DEBUG port, you may need to remove the case (e.g. on Pixhawk 4 you would do this using a T6 Torx screwdriver).")])])])]),e._v(" "),r("p",[e._v(":::")]),e._v(" "),r("ol",{attrs:{start:"8"}},[r("li",[r("p",[e._v("아래 커맨드로 Pixhawk의 swd를 스캔하고 연결하십시오:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v(" (gdb) mon swdp_scan\n (gdb) attach 1\n")])])])]),e._v(" "),r("li",[r("p",[e._v("이제 바이너리를 픽스호크에 로드하십시오: "),r("code",[e._v("(gdb) load")])])])]),e._v(" "),r("p",[e._v("After the bootloader has updated you can "),r("RouterLink",{attrs:{to:"/ko/config/firmware.html"}},[e._v("Load PX4 Firmware")]),e._v(" using "),r("em",[e._v("QGroundControl")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"other-boards-non-pixhawk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-boards-non-pixhawk"}},[e._v("#")]),e._v(" Other Boards (Non-Pixhawk)")]),e._v(" "),r("p",[e._v("Boards that are not part of the "),r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[e._v("Pixhawk Series")]),e._v(" will have their own mechanisms for bootloader update.")],1),e._v(" "),r("p",[e._v("For boards that are preflashed with Betaflight, see "),r("RouterLink",{attrs:{to:"/ko/advanced_config/bootloader_update_from_betaflight.html"}},[e._v("Bootloader Flashing onto Betaflight Systems")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=a.exports},375:function(e,t,o){e.exports=o.p+"assets/img/bootloader_update.8826d78f.jpg"}}]);