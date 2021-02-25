(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{1918:function(t,s,a){"use strict";a.r(s);var e=a(18),o=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"펌웨어-설치-및-업데이트"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#펌웨어-설치-및-업데이트"}},[t._v("#")]),t._v(" 펌웨어 설치 및 업데이트")]),t._v(" "),e("p",[e("em",[t._v("QGroundControl")]),t._v(" "),e("strong",[t._v("데스크톱")]),t._v(" 버전을 사용하여 "),e("RouterLink",{attrs:{to:"/ko/getting_started/flight_controller_selection.html"}},[t._v("Pixhawk 시리즈")]),t._v(" 비행 컨트롤러에 PX4 펌웨어를 설치할 수 있습니다.")],1),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[e("strong",[t._v("Before you start installing Firmware")]),t._v(" all USB connections to the vehicle must be "),e("em",[t._v("disconnected")]),t._v(" (both direct or through a telemetry radio). 기체에 배터리 전원 연결을 "),e("em",[t._v("중지")]),t._v("하여야 합니다.")])]),t._v(" "),e("h2",{attrs:{id:"px4-안정-버전-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4-안정-버전-설치"}},[t._v("#")]),t._v(" PX4 안정 버전 설치")]),t._v(" "),e("p",[t._v("가장 최근에 출시 된 PX4 버전은 알려진 버그의 수정되었고 최신 기능을 지원합니다.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("안정 버전은 기본적으로 설치되는 버전입니다.")])]),t._v(" "),e("p",[t._v("PX4 설치")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("상단 툴바에서 "),e("strong",[t._v("기어")]),t._v(" 아이콘 (기체 설정) 을 선택한 다음 사이드 바에서 "),e("strong",[t._v("펌웨어")]),t._v("를 선택하십시오.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(619),alt:"펌웨어가 분리됨"}})])]),t._v(" "),e("li",[e("p",[t._v("USB를 통해 비행 컨트롤러를 컴퓨터에 직접 연결합니다.")])])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("주컴퓨터에서 전원이 공급되는 USB 포트에 직접 연결합니다(USB 허브를 통해 연결하지 마십시오).")])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("p",[t._v("**PX4 Flight Stack X.x.x Release ** 옵션을 선택하여 하드웨어 "),t._v("에 대한 최신 안정 PX4 * 버전을 설치합니다(자동 감지됨).")]),e("p"),t._v(" "),e("p",[e("img",{attrs:{src:a(620),alt:"Install PX4 default"}})])]),e("p"),t._v(" "),e("ul",[e("li",[e("p",[t._v("업데이트를 시작하려면 "),e("strong",[t._v("OK")]),t._v(" 버튼을 클릭하십시오.")]),t._v(" "),e("p",[t._v("펌웨어가 업그레이드(펌웨어 다운로드, 이전 펌웨어 삭제 등)를 진행합니다. 각 단계 화면을 표출하고, 전체 진행률을 표시줄에 출력합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(621),alt:"펌웨어 업그레이드 완료"}})]),t._v(" "),e("p",[t._v("펌웨어의 업로드가 완료되면 장치가 재부팅되고 다시 연결됩니다.")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("em",[t._v("QGroundControl")]),t._v(" FMUv2 대상 설치(설치 하는 동안 콘솔 참조) 하고 새로운 보드, 비행 컨트롤러에서 모든 메모리를 액세스 하려면 "),e("a",{attrs:{href:"#bootloader"}},[t._v("부트 로더를 업데이트")]),t._v(" 하여야 합니다. :::")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("다음으로 [기체 프레임](../config/airframe.md)을 지정해야 합니다(그리고 센서, 라디오 등).\n")])])]),e("p",[e("span",{attrs:{id:"custom"}})]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("## PX4 마스터, 베타 또는 사용자 지정 펌웨어 설치\n\n다른 버전의 PX4 설치\n\n1. 위와 같이 기체를 연결하고 **PX4 Flight Stack vX.x.x Stable Release**를 선택합니다. ![PX4 버전 설치](../../assets/qgc/setup/firmware/qgc_choose_firmware.jpg)\n2. **고급 설정**을 선택하고 드롭 다운 목록에서 설치할 버전을 선택합니다. \n    * **표준 버전 (안정) :** 기본 버전 (즉, 설치를 위해 고급 설정을 사용할 필요가 없습니다!)\n    * **베타 테스트 (베타):** 베타/후보 버전입니다. 신규 버전 출시 이전에 테스트 할 경우에만 사용할 수 있습니다.\n    * **개발자 빌드 (마스터) :** PX4 / PX4-Autopilot의 최신 빌드입니다.\n    * **사용자 지정 펌웨어 파일 ... :** 사용자 지정 펌웨어 파일 (예 : 로컬에서 빌드 한 파일). 사용자 정의 펌웨어 파일을 선택한 경우 다음 단계에서 파일 시스템에서 사용자 정의 펌웨어를 선택하여야 합니다.\n\n그러면 펌웨어 업데이트가 이전과 같이 계속됩니다.\n")])])]),e("p",[e("span",{attrs:{id:"bootloader"}})]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("## FMUv2 부트로더 업데이트\n\n*QGroundControl*에서 FMUv2를 설치(설치 하는 동안 콘솔 참조) 하고, 새로운 보드의 비행 컨트롤러에서 메모리를 액세스 하려면 부트 로더를 업데이트 하여야 합니다.\n\n:::note FMUv2를 기반으로 한 초기 [Pixhawk 시리즈](../flight_controller/pixhawk_series.md#fmu_versions) 비행 컨트롤러에는 최대 1MB의 메모리까지만 사용할 수 있는 하드웨어 문제([Silicon Errata](../flight_controller/silicon_errata.md#fmuv2--pixhawk-silicon-errata))가 있었습니다. 이 문제는 최신 보드에서 수정되었지만 FMUv3 펌웨어를 설치하고 사용 가능한 모든 2MB 메모리에 액세스하려면 공장에서 제공하는 부트 로더를 업데이트하여야 합니다.\n")])])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("부트 로더 업데이트:\n\n1. SD카드를 삽입합니다 (발생할 수 있는 문제들의 디버그를 위한 부트 로그 기록을 가능하게 합니다.)\n2. PX4 *마스터* 버전으로 [펌웨어를 업데이트](../config/firmware.md) 하십시오 (펌웨어를 업데이트 할 때 **고급 설정**을 선택한 다음 드롭 다운 목록에서 **개발자 빌드 (마스터)**를 선택하십시오). *QGroundControl*은 하드웨어가 FMUv2를 지원하는지 확인하고 적절한 펌웨어를 설치합니다. \n    \n    ![FMUv2 업데이트](../../assets/qgc/setup/firmware/bootloader_update.jpg)\n    \n    기체가 재부팅 될 때까지 기다리십시오.\n\n3. [SYS_BL_UPDATE](../advanced_config/parameter_reference.md#SYS_BL_UPDATE) 매개변수를 찾아서 [활성화](../advanced_config/parameters.md) 하십시오.\n\n4. 재부팅 하십시오. (보드 연결 해제 / 다시 연결). 부트 로더 업데이트에는 몇 초 밖에 걸리지 않습니다.\n5. 그런 다음 펌웨어를 다시 업데이트하십시오. 이번에는 *QGroundControl*에서 하드웨어를 FMUv3으로 자동 감지하고 펌웨어를 적절히 업데이트해야합니다.\n    \n    ![FMUv3 업데이트](../../assets/qgc/setup/firmware/bootloader_fmu_v3_update.jpg)\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("하드웨어에 "),e("em",[t._v("Silicon Errata")]),t._v("가 있으면 FMUv2로 감지되어 FMUv2가 다시 설치되었음을 알 수 있습니다 (콘솔에 있음). 이 경우 FMUv3 하드웨어를 설치할 수 없습니다.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("자세한 내용은 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/bootloader_update.html"}},[t._v("부트 로더 업데이트")]),t._v("를 참조하십시오.")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("## 추가 정보\n\n* [QGroundControl 사용 설명서 > 펌웨어](https://docs.qgroundcontrol.com/en/SetupView/Firmware.html).\n* [PX4 설정 비디오 ](https://youtu.be/91VGmdSlbo4) (유튜브)")])])])])}),[],!1,null,null,null);s.default=o.exports},619:function(t,s,a){t.exports=a.p+"assets/img/firmware_disconnected.f89315a0.jpg"},620:function(t,s,a){t.exports=a.p+"assets/img/firmware_connected_default_px4.5f8d94f6.jpg"},621:function(t,s,a){t.exports=a.p+"assets/img/firmware_upgrade_complete.2b0acb92.jpg"}}]);