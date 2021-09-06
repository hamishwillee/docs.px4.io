(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{2138:function(t,e,o){"use strict";o.r(e);var r=o(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"펌웨어-설치-및-업데이트"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#펌웨어-설치-및-업데이트"}},[t._v("#")]),t._v(" 펌웨어 설치 및 업데이트")]),t._v(" "),r("p",[r("em",[t._v("QGroundControl")]),t._v(" "),r("strong",[t._v("데스크톱")]),t._v(" 버전을 사용하여 "),r("RouterLink",{attrs:{to:"/ko/getting_started/flight_controller_selection.html"}},[t._v("Pixhawk 시리즈")]),t._v(" 비행 콘트롤러에 PX4 펌웨어를 설치할 수 있습니다.")],1),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[r("strong",[t._v("펌웨어 설치를 시작하기 전에")]),t._v(" 기체의 모든 USB 연결을 "),r("em",[t._v("해제")]),t._v("하여야 합니다 (직접 또는 원격 측정 라디오를 통해). 기체에 배터리 전원 연결을 "),r("em",[t._v("중지")]),t._v("하여야 합니다.")])]),t._v(" "),r("h2",{attrs:{id:"px4-안정-버전-설치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-안정-버전-설치"}},[t._v("#")]),t._v(" PX4 안정 버전 설치")]),t._v(" "),r("p",[t._v("가장 최근에 출시 된 PX4 버전은 알려진 버그의 수정되었고 최신 기능을 지원합니다.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("안정 버전은 기본적으로 설치되는 버전입니다.")])]),t._v(" "),r("p",[t._v("PX4 설치")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Start "),r("em",[t._v("QGroundControl")]),t._v(" and connect the vehicle.")])]),t._v(" "),r("li",[r("p",[t._v("Select "),r("strong",[t._v('"Q" icon > Vehicle Setup > Firmware')]),t._v(" (sidebar) to open "),r("em",[t._v("Firmware Setup")]),t._v(".")]),t._v(" "),r("p",[r("img",{attrs:{src:o(616),alt:"Firmware disconnected"}})])]),t._v(" "),r("li",[r("p",[t._v("Connect the flight controller directly to your computer via USB.")])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("Connect directly to a powered USB port on your machine (do not connect through a USB hub).")])]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[r("p",[t._v("Select the "),r("strong",[t._v("PX4 Flight Stack X.x.x Release")]),t._v(" option to install the latest stable version of PX4 "),r("em",[t._v("for your hardware")]),t._v(" (autodetected).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(617),alt:"Install PX4 default"}})])]),t._v(" "),r("li",[r("p",[t._v("Click the "),r("strong",[t._v("OK")]),t._v(" button to start the update.")]),t._v(" "),r("p",[t._v("The firmware will then proceed through a number of upgrade steps (downloading new firmware, erasing old firmware etc.). Each step is printed to the screen and overall progress is displayed on a progress bar.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(618),alt:"Firmware upgrade complete"}})]),t._v(" "),r("p",[t._v("Once the firmware has completed loading, the device/vehicle will reboot and reconnect.")])])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("If "),r("em",[t._v("QGroundControl")]),t._v(" installs the FMUv2 target (see console during installation) and you have a newer board, you may need to "),r("a",{attrs:{href:"#bootloader"}},[t._v("update the bootloader")]),t._v(" in order to access all the memory on your flight controller.")])]),t._v(" "),r("p",[t._v("다음으로 "),r("RouterLink",{attrs:{to:"/ko/config/airframe.html"}},[t._v("기체 프레임")]),t._v("을 지정해야 합니다(그리고 센서, 라디오 등).")],1),t._v(" "),r("p",[r("span",{attrs:{id:"custom"}})]),t._v(" "),r("h2",{attrs:{id:"px4-마스터-베타-또는-사용자-지정-펌웨어-설치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-마스터-베타-또는-사용자-지정-펌웨어-설치"}},[t._v("#")]),t._v(" PX4 마스터, 베타 또는 사용자 지정 펌웨어 설치")]),t._v(" "),r("p",[t._v("다른 버전의 PX4 설치")]),t._v(" "),r("ol",[r("li",[t._v("위와 같이 기체를 연결하고 "),r("strong",[t._v("PX4 Flight Stack vX.x.x Stable Release")]),t._v("를 선택합니다. "),r("img",{attrs:{src:o(619),alt:"PX4 버전 설치"}})]),t._v(" "),r("li",[r("strong",[t._v("고급 설정")]),t._v("을 선택하고 드롭 다운 목록에서 설치할 버전을 선택합니다.\n"),r("ul",[r("li",[r("strong",[t._v("표준 버전 (안정) :")]),t._v(" 기본 버전 (즉, 설치를 위해 고급 설정을 사용할 필요가 없습니다!)")]),t._v(" "),r("li",[r("strong",[t._v("베타 테스트 (베타):")]),t._v(" 베타/후보 버전입니다. 신규 버전 출시 이전에 테스트 할 경우에만 사용할 수 있습니다.")]),t._v(" "),r("li",[r("strong",[t._v("개발자 빌드 (마스터) :")]),t._v(" PX4 / PX4-Autopilot의 최신 빌드입니다.")]),t._v(" "),r("li",[r("strong",[t._v("사용자 지정 펌웨어 파일 ... :")]),t._v(" 사용자 지정 펌웨어 파일 (예 : 로컬에서 빌드 한 파일). 사용자 정의 펌웨어 파일을 선택한 경우 다음 단계에서 파일 시스템에서 사용자 정의 펌웨어를 선택하여야 합니다.")])])])]),t._v(" "),r("p",[t._v("그러면 펌웨어 업데이트가 이전과 같이 계속됩니다.")]),t._v(" "),r("p",[r("a",{attrs:{id:"bootloader"}})]),t._v(" "),r("h2",{attrs:{id:"fmuv2-부트로더-업데이트"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fmuv2-부트로더-업데이트"}},[t._v("#")]),t._v(" FMUv2 부트로더 업데이트")]),t._v(" "),r("p",[r("em",[t._v("QGroundControl")]),t._v("에서 FMUv2를 설치(설치 하는 동안 콘솔 참조) 하고, 새로운 보드의 비행 컨트롤러에서 메모리를 액세스 하려면 부트 로더를 업데이트 하여야 합니다.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("FMUv2를 기반으로 한 초기 [Pixhawk 시리즈](../flight_controller/pixhawk_series.md#fmu_versions) 비행 콘트롤러에는 최대 1MB의 메모리까지만 사용할 수 있는 문제([Silicon Errata](../flight_controller/silicon_errata.md#fmuv2-pixhawk-silicon-errata))가 있었습니다. 이 문제는 최신 보드에서 수정되었지만 FMUv3 펌웨어를 설치하고 사용 가능한 모든 2MB 메모리에 액세스하려면 공장에서 제공하는 부트 로더를 업데이트하여야 합니다.")])]),t._v(" "),r("p",[t._v("부트 로더 업데이트:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("SD카드를 삽입합니다 (발생할 수 있는 문제들의 디버그를 위한 부트 로그 기록을 가능하게 합니다.)")])]),t._v(" "),r("li",[r("p",[t._v("PX4 "),r("em",[t._v("마스터")]),t._v(" 버전으로 "),r("RouterLink",{attrs:{to:"/ko/config/firmware.html"}},[t._v("펌웨어를 업데이트")]),t._v(" 하십시오 (펌웨어를 업데이트 할 때 "),r("strong",[t._v("고급 설정")]),t._v("을 선택한 다음 드롭 다운 목록에서 **개발자 빌드 (마스터)**를 선택하십시오). "),r("em",[t._v("QGroundControl")]),t._v("은 하드웨어가 FMUv2를 지원하는지 확인하고 적절한 펌웨어를 설치합니다.")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(343),alt:"FMUv2 업데이트"}})]),t._v(" "),r("p",[t._v("기체가 재부팅 될 때까지 기다리십시오.")])]),t._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v(" 매개변수를 찾아서 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("활성화")]),t._v(" 하십시오.")],1)]),t._v(" "),r("li",[r("p",[t._v("재부팅 하십시오. (보드 연결 해제 / 다시 연결). 부트 로더 업데이트에는 몇 초 밖에 걸리지 않습니다.")])]),t._v(" "),r("li",[r("p",[t._v("그런 다음 펌웨어를 다시 업데이트하십시오. 이번에는 "),r("em",[t._v("QGroundControl")]),t._v("에서 하드웨어를 FMUv3으로 자동 감지하고 펌웨어를 적절히 업데이트해야합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(620),alt:"FMUv3 업데이트"}})])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("하드웨어에 "),r("em",[t._v("Silicon Errata")]),t._v("가 있으면 FMUv2로 감지되어 FMUv2가 다시 설치되었음을 알 수 있습니다 (콘솔에 있음). 이 경우 FMUv3 하드웨어를 설치할 수 없습니다.")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("자세한 내용은 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/bootloader_update.html"}},[t._v("부트 로더 업데이트")]),t._v("를 참조하십시오.")],1)]),t._v(" "),r("h2",{attrs:{id:"추가-정보"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Firmware.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 사용 설명서 > 펌웨어"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 설정 비디오"),r("OutboundLink")],1),t._v(" (유튜브)")])])])}),[],!1,null,null,null);e.default=a.exports},343:function(t,e,o){t.exports=o.p+"assets/img/bootloader_update.8826d78f.jpg"},616:function(t,e,o){t.exports=o.p+"assets/img/firmware_disconnected.f89315a0.jpg"},617:function(t,e,o){t.exports=o.p+"assets/img/firmware_connected_default_px4.5f8d94f6.jpg"},618:function(t,e,o){t.exports=o.p+"assets/img/firmware_upgrade_complete.2b0acb92.jpg"},619:function(t,e,o){t.exports=o.p+"assets/img/qgc_choose_firmware.25e5ccac.jpg"},620:function(t,e,o){t.exports=o.p+"assets/img/bootloader_fmu_v3_update.ae388788.jpg"}}]);