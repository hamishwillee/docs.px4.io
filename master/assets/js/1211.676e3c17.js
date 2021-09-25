(window.webpackJsonp=window.webpackJsonp||[]).push([[1211],{2354:function(t,r,e){"use strict";e.r(r);var n=e(19),a=Object(n.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"nuttx-보드-포팅-가이드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nuttx-보드-포팅-가이드"}},[t._v("#")]),t._v(" NuttX 보드 포팅 가이드")]),t._v(" "),e("p",[t._v("NuttX의 PX4를 포팅하려면, 하드웨어가 NuttX를 지원하여야 합니다. NuttX 프로젝트는 NuttX를 새로운 플랫폼으로 포팅하기 위한 "),e("a",{attrs:{href:"https://cwiki.apache.org/confluence/display/NUTTX/Porting+Guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("포팅 가이드"),e("OutboundLink")],1),t._v("를 제공합니다.")]),t._v(" "),e("p",[t._v("다음 가이드에서는 기존 지원 하드웨어를 사용하거나, NuttX("),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/platforms/nuttx/src/px4",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 기본 레이어"),e("OutboundLink")],1),t._v(" 포함)를 이미 포팅하였다고 가정합니다.")]),t._v(" "),e("p",[t._v("링커 스크립트와 기타 필수 설정을 포함한 모든 보드의 설정 파일은 공급업체의 보드별 디렉토리의 "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards/",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards"),e("OutboundLink")],1),t._v(" 아래에 있습니다(예: **boards/_VENDOR</2 >/"),e("em",[t._v("MODEL")]),t._v(")).")]),e("p"),t._v(" "),e("p",[t._v("다음 예는 NuttX 비행 콘트롤러에 대한 최근 "),e("RouterLink",{attrs:{to:"/ko/hardware/reference_design.html"}},[t._v("참조 설정")]),t._v("인 FMUv5를 사용합니다.")],1),t._v(" "),e("ul",[e("li",[e("strong",[t._v("PX4-Autopilot")]),t._v(" 디렉토리에서 "),e("code",[t._v("make px4_fmu-v5_default")]),t._v("를 실행하면, FMUv5 설정이 빌드됩니다.")]),t._v(" "),e("li",[t._v("기본 FMUv5 설정 파일은 "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards/px4/fmu-v5",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5"),e("OutboundLink")],1),t._v(" 폴더에 있습니다.\n"),e("ul",[e("li",[t._v("보드별 헤더(NuttX 핀 및 클록 구성): "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/nuttx-config/include/board.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5/nuttx-config/include/board.h"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("보드별 헤더(PX4 구성): "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/src/board_config.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5/src/board_config.h"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("NuttX OS 설정(NuttX menuconfig로 생성): "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/nuttx-config/nsh/defconfig",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5/nuttx-config/nsh/defconfig"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("빌드 설정: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/default.cmake",target:"_blank",rel:"noopener noreferrer"}},[t._v("boards/px4/fmu-v5/default.cmake"),e("OutboundLink")],1),t._v(".")])])])]),t._v(" "),e("h2",{attrs:{id:"nuttx-메뉴-구성-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nuttx-메뉴-구성-설정"}},[t._v("#")]),t._v(" NuttX 메뉴 구성 설정")]),t._v(" "),e("p",[t._v("NuttX OS 구성을 수정하려면, PX4 단축키를 사용하여 "),e("a",{attrs:{href:"https://bitbucket.org/patacongo/nuttx/src/master/",target:"_blank",rel:"noopener noreferrer"}},[t._v("menuconfig"),e("OutboundLink")],1),t._v("를 사용할 수 있습니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v5_default menuconfig\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v5_default qconfig\n")])])]),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),e("OutboundLink")],1),t._v("을 사용하여 Ubuntu에 PX4를 설치하려면, "),e("a",{attrs:{href:"https://bitbucket.org/nuttx/tools/src/master/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttX 도구"),e("OutboundLink")],1),t._v("에서 "),e("em",[t._v("kconfig")]),t._v(" 도구를 설치하여야 합니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-nuttx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4-dev-nuttx"),e("OutboundLink")],1),t._v(" 도커 컨테이너를 사용하거나 일반 지침("),e("code",[t._v("kconfig-mconf")]),t._v(" 포함)을 사용하여 MacOS에 설치한 경우에는 다음 단계가 필요하지 않습니다.")])]),t._v(" "),e("p",[t._v("임의의 디렉터리에서 다음 명령어를 실행합니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://bitbucket.org/nuttx/tools.git\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" tools/kconfig-frontends\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gperf\n./configure --enable-mconf --disable-nconf --disable-gconf --enable-qconf --prefix"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("p",[e("code",[t._v("--prefix=/usr")]),t._v("은 특정 설치 위치를 결정합니다("),e("code",[t._v("PATH")]),t._v(" 환경 변수에 있어야 함). "),e("code",[t._v("--enable-mconf")]),t._v("와 "),e("code",[t._v("--enable-qconf")]),t._v(" 옵션은 각각 "),e("code",[t._v("menuconfig")]),t._v("와 "),e("code",[t._v("qconfig")]),t._v(" 옵션을 활성화합니다.")]),t._v(" "),e("p",[e("code",[t._v("qconfig")]),t._v("를 실행하려면, 추가 Qt 종속성을 설치하여야 합니다.")]),t._v(" "),e("h3",{attrs:{id:"부트로더"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#부트로더"}},[t._v("#")]),t._v(" 부트로더")]),t._v(" "),e("p",[t._v("먼저 하드웨어 대상에 적합한 부트로더가 필요합니다.")]),t._v(" "),e("ul",[e("li",[t._v("STM32H7: 부트로더는 NuttX를 기반으로 하며, PX4 펌웨어에 포함되어 있습니다. 예를 보려면 "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards/holybro/durandal-v1/nuttx-config/bootloader",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),e("OutboundLink")],1),t._v("를 참고하십시오.")]),t._v(" "),e("li",[t._v("다른 대상의 경우 https://github.com/PX4/Bootloader가 사용됩니다. 대상 추가 방법 예는 "),e("a",{attrs:{href:"https://github.com/PX4/Bootloader/pull/155/files",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),e("OutboundLink")],1),t._v("를 참고하십시오. 그런 다음, "),e("RouterLink",{attrs:{to:"/ko/software_update/stm32_bootloader.html"}},[t._v("설정 및 플래시 방법")]),t._v("을 확인하십시오.")],1)]),t._v(" "),e("h3",{attrs:{id:"펌웨어-포팅-단계"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#펌웨어-포팅-단계"}},[t._v("#")]),t._v(" 펌웨어 포팅 단계")]),t._v(" "),e("ol",[e("li",[t._v("작동 중인 "),e("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[t._v("개발 설정")]),t._v(" 여부와 NuttX menuconfig 도구를 설치여부를 확인하십시오(위 참조).")],1),t._v(" "),e("li",[t._v("소스 코드를 다운로드하고 기존 대상을 빌드할 수 있는 지 확인합니다."),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recursive https://github.com/PX4/PX4-Autopilot.git\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v5\n")])])])]),t._v(" "),e("li",[t._v("동일한(또는 유사한) CPU 유형을 사용하는 기존 대상을 복사합니다. 예: STM32F7의 경우"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" boards/manufacturer\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -r boards/px4/fmu-v5 boards/manufacturer/my-target-v1\n")])])]),e("strong",[t._v("manufacturer")]),t._v("를 제조업체 이름으로 변경하고, "),e("strong",[t._v("my-target-v1")]),t._v("을 보드 이름으로 변경합니다.")])]),t._v(" "),e("p",[t._v("다음으로 "),e("strong",[t._v("boards/manufacturer/my-target-v1")]),t._v(" 아래의 모든 파일을 살펴보고 보드에 따라 업데이트하여야 합니다.")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("firmware.prototype")]),t._v(": 보드 ID 및 이름 업데이트")]),t._v(" "),e("li",[e("strong",[t._v("default.cmake")]),t._v(": 디렉토리 이름("),e("strong",[t._v("my-target-v1")]),t._v(")과 일치하도록 "),e("strong",[t._v("VENDOR")]),t._v("와 "),e("strong",[t._v("MODEL")]),t._v("을 업데이트합니다. 직렬 포트를 설정합니다.")]),t._v(" "),e("li",[e("code",[t._v("make Manufacturer_my-target-v1 menuconfig")]),t._v("를 통한 NuttX("),e("strong",[t._v("defconfig")]),t._v(") 설정: CPU와 칩을 조정하고 주변 장치(UART, SPI, I2C, ADC)를 설정합니다.")]),t._v(" "),e("li",[e("strong",[t._v("nuttx-config/include/board.h")]),t._v(": NuttX 핀을 설정합니다. 여러 가지 핀 옵션이 있는 주변 장치에서는 NuttX는 핀 정보을 알아야 합니다. 칩별 핀맵 헤더 파일에 정의되어 있습니다(예: "),e("a",{attrs:{href:"https://github.com/PX4/NuttX/blob/px4_firmware_nuttx-8.2/arch/arm/src/stm32f7/hardware/stm32f74xx75xx_pinmap.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("stm32f74xx75xx_pinmap.h"),e("OutboundLink")],1),t._v(").")]),t._v(" "),e("li",[e("strong",[t._v("src")]),t._v(": "),e("strong",[t._v("src")]),t._v(" 아래의 모든 파일을 살펴보고 필요에 따라 업데이트합니다(특히 "),e("strong",[t._v("board_config.h")]),t._v(").")]),t._v(" "),e("li",[e("strong",[t._v("init/rc.board_sensors")]),t._v(": 보드에 부착된 센서를 시작합니다.")])])])}),[],!1,null,null,null);r.default=a.exports}}]);